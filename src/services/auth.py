import os

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from dotenv import load_dotenv
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from passlib.context import CryptContext

from models.users import Users
from database import get_db


load_dotenv()  # carrega as variáveis do arquivo .env para o ambiente

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme= OAuth2PasswordBearer(tokenUrl="auth/login")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_user_by_email(email: str, db: Session):
    result = db.query(Users).filter(Users.email == email).first()
    return result


def authenticate_user(data: dict[str, str], db: Session):
    user = get_user_by_email(data['email'], db)
    
    if not user or not verify_password(data['password'], user.hashed_password):
        return False
    
    return user


def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Unauthorized",
        headers={ "WWW-Authenticate": "Bearer" },
    )
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = db.query(Users).filter_by(id=user_id).first()
    if user is None:
        raise credentials_exception
    return user
