from fastapi import APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import timedelta

from database import get_db
from models.users import Users
from services.auth import (
    get_db, authenticate_user, create_access_token,
    get_current_user, ACCESS_TOKEN_EXPIRE_MINUTES, pwd_context
)
from views.auth import LoginIn


router = APIRouter(prefix="/auth")


@router.post("/")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user_data = { "email": form_data.username, "password": form_data.password }     
    user = authenticate_user(db, user_data)
    if not user:
        raise HTTPException(status_code=400, detail="Usuário ou senha inválidos")
    access_token = create_access_token(
        data = { "sub": user.name },
        expires_delta = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    return { "access_token": access_token, "token_type": "bearer" }


@router.post("/register")
def register(user_data: LoginIn, db: Session = Depends(get_db)):
    hashed = pwd_context.hash(user_data.password)
    
    new_user = Users(
        name=user_data.name,
        email=user_data.email,
        hashed_password=hashed,
    )
    
    db.add(new_user)
    db.commit()
    db.refresh(new_user) # retorna o objeto com o ID gerado, por exemplo
    return {"msg": "Usuário criado com sucesso"}