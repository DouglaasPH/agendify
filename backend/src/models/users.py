from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from database import Base

class Users(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    profileAvatarId = Column(Integer, nullable=False)
    name = Column(String, nullable=False)
    hashed_password = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    profession = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    
    refresh_tokens = relationship("RefreshToken", back_populates="user")