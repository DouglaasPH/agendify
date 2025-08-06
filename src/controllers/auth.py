from datetime import datetime

from fastapi import APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException

from sqlalchemy.orm import Session

from database import get_db
from models.users import Users
from models.refresh_tokens import RefreshToken
from views.auth import LoginIn, RefreshTokenView
from services.auth import get_db, authenticate_user, pwd_context, get_current_user
from services.token import create_access_token, create_refresh_token


router = APIRouter(prefix="/auth")


@router.post("/register")
def register(user_data: LoginIn, db: Session = Depends(get_db)):
    hashed = pwd_context.hash(user_data.password)
    
    new_user = Users(
        name=user_data.name,
        email=user_data.email,
        profession=user_data.profession,
        hashed_password=hashed,
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user) # retorna o objeto com o ID gerado, por exemplo
    
    return {"msg": "User created successfully"}


@router.post("/")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user_data = { "email": form_data.username, "password": form_data.password }     
    user = authenticate_user(user_data, db)
    if not user:
        raise HTTPException(status_code=400, detail="Invalid username or password.")
    
    access_token = create_access_token(user.id)
    refresh_token = create_refresh_token(user.id, db)
    
    return { 
            "access_token": access_token, 
            "refresh_token": refresh_token,
            "token_type": "bearer",
            }


@router.post("/logout")
def logout(refresh_token: RefreshTokenView, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    token = db.query(RefreshToken).filter(RefreshToken.token == refresh_token).first()
    
    if token.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Token does not belong to the user.")
    
    if not token or token.is_revoked:
        raise HTTPException(status_code=404, detail="Refresh token not found.")
    
    token.is_revoked = True
    db.commit()
    
    return { "msg": "Logout successful." }


@router.post("/refresh")
def refresh_token(refresh_token: RefreshTokenView, db: Session = Depends(get_db)):
    db_token = db.query(RefreshToken).filter_by(token=refresh_token).first()
    if not db_token or db_token.is_revoked or db_token.expires_at < datetime.utcnow():
        raise HTTPException(status_code=401, detail="Invalid refresh token.")

    user = db_token.user
    new_access_token = create_access_token(user.id)
        
    return {"access_token": new_access_token, "refresh_token": refresh_token, "token_type": "bearer"}