from pydantic import BaseModel

class CreateAppointment(BaseModel):
    professional_id: int
    availability_id: int
    

class Customer(BaseModel):
    name: str
    email: str