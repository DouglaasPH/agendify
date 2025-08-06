from pydantic import BaseModel

class LoginOut(BaseModel):
    access_token: str


class LoginIn(BaseModel):
    name: str
    email: str
    password: str
    profession: str


class RefreshTokenView(BaseModel):
    refresh_token: str
