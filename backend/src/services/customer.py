import os

from fastapi import Depends, HTTPException, Header, logger, status

from dotenv import load_dotenv

from jose import jwt, JWTError
from sqlalchemy.orm import Session

from models.customers import Customers
from database import get_db


load_dotenv()  # carrega as variáveis do arquivo .env para o ambiente

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

def get_current_customer(
    db: Session = Depends(get_db),
    authorization: str = Header(None)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Unauthorized",
        headers={"WWW-Authenticate": "Bearer"},
    )
    
    if authorization is None or not authorization.startswith("Bearer "):
        raise credentials_exception
    
    token = authorization.split(" ")[1]

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        customer_id: str = payload.get("sub")
        if customer_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    customer = db.query(Customers).filter_by(id=customer_id).first()    
    if customer is None:
        raise credentials_exception
    return customer