import enum

from sqlalchemy import Column, Integer, ForeignKey, Enum
from sqlalchemy.orm import relationship

from database import Base


class AppointmentStatus(enum.Enum):
    confirmed = "confirmed"
    canceled = "canceled"
    past = "past"


# TODO: Choice of services for customers
class Appointments(Base):
    __tablename__ = "appointments"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    availability_id = Column(Integer, ForeignKey("availabilities.id"), unique=False)
    status = Column(Enum(AppointmentStatus), default=AppointmentStatus.confirmed, nullable=False)    
    customer_id = Column(Integer, ForeignKey("customers.id"), unique=False)
    
    availabilities = relationship("Availabilities", back_populates="appointments")
    customers = relationship("Customers", back_populates="appointments")
