import enum

from sqlalchemy import Column, Integer, String, ForeignKey, Enum
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
    availability_id = Column(Integer, ForeignKey("availabilities.id"), unique=True)
    status = Column(Enum(AppointmentStatus), default=AppointmentStatus.confirmed, nullable=False)
    customer = Column(String, nullable=False)
    customer_email = Column(String, nullable=False)
    
    availabilities = relationship("Availabilities", back_populates="appointments")
