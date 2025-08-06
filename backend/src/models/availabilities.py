import enum

from sqlalchemy import Column, Integer, DateTime, ForeignKey, Date, Enum
from sqlalchemy.orm import relationship

from database import Base


class Status(enum.Enum):
    busy = "busy"
    uncoupled= "uncoupled"

class Availabilities(Base):
    __tablename__ = "availabilities"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    date = Column(Date, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    slot_duration_minutes = Column(Integer, nullable=False)
    status = Column(Enum(Status), default=Status.busy, nullable=False)
    
    appointments = relationship("Appointments", back_populates="availabilities", uselist=False)
