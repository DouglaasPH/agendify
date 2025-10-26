from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from database import Base

class Customers(Base):
    __tablename__ = "customers"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    
    appointments = relationship("Appointments", back_populates="customers", uselist=False)