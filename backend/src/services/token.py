import os
import uuid
from datetime import datetime, timedelta

from dotenv import load_dotenv
from jose import jwt
from sqlalchemy.orm import Session

from database import get_db
from models.refresh_tokens import RefreshToken


load_dotenv()  # carrega as variáveis do arquivo .env para o ambiente

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))
REFRESH_EXPIRE_DAYS = int(os.getenv("REFRESH_EXPIRE_DAYS"))


def create_access_token(user_id):
    now = datetime.utcnow()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    a = str(user_id)
    b = int(now.timestamp())
    c = int(expire.timestamp())

    payload = {
        "sub": str(user_id),
        "iat": int(now.timestamp()),
        "exp": int(expire.timestamp()),
        "scope": "access_token",
    }
    
    access_token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    
    return access_token


def create_refresh_token(user_id, db: Session):
    refresh_token = str(uuid.uuid4())
    expires_at = datetime.utcnow() + timedelta(days=REFRESH_EXPIRE_DAYS)
    
    new_refresh_token = RefreshToken(
        user_id= user_id,
        token=refresh_token,
        expires_at=expires_at
    )
    db.add(new_refresh_token)
    db.commit()
    
    return refresh_token
