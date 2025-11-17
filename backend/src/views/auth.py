from typing import Optional
from pydantic import BaseModel

class LoginOut(BaseModel):
    access_token: str


class DataToVerifyAccount(BaseModel):
    name: str
    email: str
    password: str
    profession: str
    profileAvatarId: int
    phoneNumber: str
    

class Token(BaseModel):
    token: str


class UserDataToUpdate(BaseModel):
    name: Optional[str] = None
    profession: Optional[str] = None
    profileAvatarId: Optional[int] = None
    phoneNumber: Optional[str] = None


class UserEmailToUpdate(BaseModel):
    new_email: str

class UserPasswordToUpdate(BaseModel):
    currentPassword: str
    newPassword: str
    

class EmailData(BaseModel):
    email: str


class ResetPasswordData(BaseModel):
    newPassword: str
    token: str