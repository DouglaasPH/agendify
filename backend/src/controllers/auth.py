from datetime import datetime, timedelta
import uuid

from fastapi import APIRouter, Request, Response
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException

from sqlalchemy.orm import Session

from database import get_db
from models.users import Users
from models.appointments import Appointments
from models.availabilities import Availabilities
from models.refresh_tokens import RefreshToken
from services.mail_service import send_email_change_confirmation, send_password_reset_email, send_verification_email
from views.auth import DataToVerifyAccount, EmailData, ResetPasswordData, Token, UserDataToUpdate, UserEmailToUpdate, UserPasswordToUpdate
from services.auth import decode_token, generation_token, get_db, authenticate_user, pwd_context, get_current_user, verify_password
from services.token import create_access_token, create_refresh_token


router = APIRouter(prefix="/auth")


@router.post("/register/generate-verification-token")
async def generate_verification_token(user_data: DataToVerifyAccount):
    hashed = pwd_context.hash(user_data.password)
    chat_code = str(uuid.uuid4())
    
    payload =  {
        "name":user_data.name,
        "email":user_data.email,
        "profession":user_data.profession,
        "hashed_password":hashed,
        "profileAvatarId":user_data.profileAvatarId,
        "phone_number":user_data.phoneNumber,
        "chat_code":chat_code,
        "exp": int((datetime.utcnow() + timedelta(minutes=5)).timestamp())
    }
    token = generation_token(payload)
    
    link = f"http://localhost:5173/validate-email-in-register/{token}"
        
    await send_verification_email(link, user_data.email)
    
    return { "msg": "Email sent successfully." }


@router.post("/register")
def register(data: Token, db: Session = Depends(get_db)):
    decoded_token = decode_token(data.token)
    
    existing_user = db.query(Users).filter(Users.email == decoded_token["email"]).first()
    
    if existing_user:
        raise HTTPException(status_code=409, detail="User already registered")

    
    new_user = Users(
        name=decoded_token["name"],
        email=decoded_token["email"],
        profession=decoded_token["profession"],
        hashed_password=decoded_token["hashed_password"],
        profileAvatarId=decoded_token["profileAvatarId"],
        phone_number=decoded_token["phone_number"],
        chat_code=decoded_token["chat_code"],
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user) # retorna o objeto com o ID gerado, por exemplo
    
    return {"msg": "User created successfully"}


@router.post("/")
def login(response: Response, form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user_data = { "email": form_data.username, "password": form_data.password }
    user = authenticate_user(user_data, db)

    if not user:
        raise HTTPException(status_code=400, detail="Invalid username or password.")
    
    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id, db)
    
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,
        samesite="lax",
        max_age=60*60*48,  # 2 days
        path="/",
        domain="localhost", 
    )
    
    
    return { 
            "access_token": access_token, 
            "token_type": "bearer",
            }


@router.get("/")
def getUserDataForUser(current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    query = db.query(Users).filter(Users.id == current_user.id).first()
    if not query:
        raise HTTPException(status_code=404, detail="User not found.")

    return {
        "name": query.name,
        "email": query.email,
        "phoneNumber": query.phone_number,
        "profession": query.profession,
        "profileAvatarId": query.profileAvatarId,
        "chat_code": query.chat_code,
    }
    
    
@router.get("/{chat_code}")
def getUserDataForCustomer(chat_code: str, db: Session = Depends(get_db)):
    query = db.query(Users).filter(Users.chat_code == chat_code).first()
    if not query:
        raise HTTPException(status_code=404, detail="User not found.")

    return {
        "id": query.id,
        "name": query.name,
        "profession": query.profession,
        "profileAvatarId": query.profileAvatarId,
    }


@router.post("/logout")
def logout(response: Response, request: Request, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    refresh_token = request.cookies.get("refresh_token")
    token = db.query(RefreshToken).filter(RefreshToken.token == refresh_token).first()
    
    if token.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Token does not belong to the user.")
    
    if not token or token.is_revoked:
        raise HTTPException(status_code=404, detail="Refresh token not found.")
    
    token.is_revoked = True
    db.commit()
    
    response.delete_cookie(
        key="refresh_token",
        path="/",
        domain="localhost"
    )
    
    return { "msg": "Logout successful." }


@router.delete("/delete")
def deleteAccount(response: Response, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    db.query(Users).filter(Users.id == current_user.id).delete()
    db.query(Appointments).filter(Appointments.user_id == current_user.id).delete()
    db.query(Availabilities).filter(Availabilities.user_id == current_user.id).delete()
    db.commit()
    
    response.delete_cookie(
        key="refresh_token",
        path="/",
        domain="localhost"
    )

    return { "msg": "Account successfully deleted." }


@router.post("/refresh")
def refresh_token(request: Request, db: Session = Depends(get_db)):
    refresh_token = request.cookies.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    
    db_token = db.query(RefreshToken).filter_by(token=refresh_token).first()
    if not db_token or db_token.is_revoked or db_token.expires_at < datetime.utcnow():
        raise HTTPException(status_code=401, detail="Invalid refresh token.")

    user = db_token.user
    new_access_token = create_access_token(user.id)
    
    return {"access_token": new_access_token, "token_type": "bearer"}


@router.get("/check-email/{email}")
def check_email(email: str, db: Session = Depends(get_db)):
    query = db.query(Users).filter(Users.email == email)
    
    if query.all(): 
        return { "exists": True }
    else: 
        return { "exists": False }


@router.put("/modify-user-data")
def modifyUserData(user_data_to_update: UserDataToUpdate, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(Users).filter(Users.id == current_user.id).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    
    if user_data_to_update.name is not None:
        user.name = user_data_to_update.name
    if user_data_to_update.profession is not None:
        user.profession = user_data_to_update.profession    
    if user_data_to_update.profileAvatarId is not None:
        user.profileAvatarId = user_data_to_update.profileAvatarId    
    if user_data_to_update.phoneNumber is not None:
        user.phoneNumber = user_data_to_update.phoneNumber
        
    db.commit()
    db.refresh(user)
    
    return user


@router.post("/send-email-to-change-email")
async def sendEmailToChangeEmail(data: UserEmailToUpdate, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(Users).filter(Users.id == current_user.id).first()
    
    
    verify_email = db.query(Users).filter(Users.email == data.new_email).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    if verify_email:
        raise HTTPException(status_code=409, detail="The email is already linked to an account.")
    
    payload =  {
        "current_email":user.email,
        "new_email":data.new_email,
        "exp": int((datetime.utcnow() + timedelta(minutes=15)).timestamp())
    }
    token = generation_token(payload)
    
    link = f"http://localhost:5173/change-email/{token}"
    
    await send_email_change_confirmation(current_user.name, current_user.email, data.new_email, link)
    
    return { "msg": "Email sent successfully." }


@router.put("/modify-user-email")
def modifyUserEmail(data: Token, db: Session = Depends(get_db)):
    decoded_token = decode_token(data.token)
    user = db.query(Users).filter(Users.email == decoded_token["current_email"]).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
        
    user.email = decoded_token["new_email"]
    
    db.commit()
    db.refresh(user)
    
    return { "msg": "Password changed succesfully." }



@router.post("/forgot-your-password")
async def forgotYourPassword(email_data: EmailData, db: Session = Depends(get_db)):
    user_data = db.query(Users).filter(Users.email == email_data.email).first()
    
    if not user_data:
        raise HTTPException(status_code=404, detail="User not existing.")
    
    
    payload =  {
        "user_id":user_data.id,
        "email":user_data.email,
        "exp": int((datetime.utcnow() + timedelta(minutes=15)).timestamp())
    }
    token = generation_token(payload)
    
    link = f"http://localhost:5173/forgot-your-password/reset-password/{token}"
        
    await send_password_reset_email(user_data.name, user_data.email, link)
    
    return { "msg": "Email sent successfully." }


@router.put("/forgot-your-password/reset-password")
async def forgotYourPassword(data: ResetPasswordData, db: Session = Depends(get_db)):
    decoded_token = decode_token(data.token)
    user = db.query(Users).filter(Users.id == decoded_token["user_id"]).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    
    hashed = pwd_context.hash(data.newPassword)
    
    user.hashed_password = hashed
    
    db.commit()
    db.refresh(user)
    
    return { "msg": "Password changed succesfully." }
    

@router.put("/modify-user-password")
def modifyUserPassword(user_password_to_update: UserPasswordToUpdate, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(Users).filter(Users.id == current_user.id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found.")
    if not verify_password(user_password_to_update.currentPassword, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid password.")
    
    hashed = pwd_context.hash(user_password_to_update.newPassword)
    user.hashed_password = hashed
        
    db.commit()
    db.refresh(user)
    
    return { "msg": "Password changed successfully." }
