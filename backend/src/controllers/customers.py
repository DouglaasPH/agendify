from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session, joinedload

from database import get_db
from models.appointments import Appointments
from models.availabilities import Availabilities
from models.customers import Customers
from services.customer import get_current_customer
from views.customer import Customer, CreateAppointment
from services.token import create_access_token


router = APIRouter(prefix="/customer")


@router.post("/")
def registerOrLoginWithoutCustomerId(data: Customer, db: Session = Depends(get_db)):
    query = db.query(Customers).filter(Customers.name == data.name, Customers.email == data.email).first()
    
    # register
    if not query:
        new_customer = Customers(
            name= data.name,
            email= data.email
        )
        
        db.add(new_customer)
        db.commit()
        db.refresh(new_customer)
    
        access_token = create_access_token(new_customer.id)
    
        return { "access_token" : access_token, "customer_data": { "id": new_customer.id, "name": new_customer.name, "email": new_customer.email} }
    else: 
        # login
        access_token = create_access_token(query.id)
    
        return { "access_token" : access_token, "customer_data": { "id": query.id, "name": query.name, "email": query.email} }


@router.post("/{customer_id}")
def loginWithCustomerId(customer_id, db: Session = Depends(get_db)):
    query = db.query(Customers).filter(Customers.id == customer_id).first()
    
    if not query:
        raise HTTPException(status_code=400, detail="Invalid customer id..")
    
    # login
    access_token = create_access_token(customer_id)
    
    return { "access_token" : access_token, "customer_data": { "id": query.id, "name": query.name, "email": query.email} }
    

@router.get("/availability/{user_id}")
def allAvailabilities(user_id, current_customer: Customers = Depends(get_current_customer), db: Session = Depends(get_db)):
    query = db.query(Availabilities).filter(Availabilities.user_id == user_id, Availabilities.status == "available").all()
    return query


@router.get("/appointment")
def allAppointments(current_customer: Customers = Depends(get_current_customer), db: Session = Depends(get_db)):
    query = db.query(Appointments).filter(Appointments.customer_id == current_customer.id).join(Appointments.availabilities).options(joinedload(Appointments.availabilities)).all()
    print(query)
    
    return query

@router.post("/appointment/create")
def createAppointment(data: CreateAppointment, current_customer: Customers = Depends(get_current_customer), db: Session = Depends(get_db)):
    current_availability = db.query(Availabilities).filter(Availabilities.id == data.availability_id).first()
    
    if not current_availability:
        raise HTTPException(status_code=404, detail="Availability not found.")
    
    new_appointment = Appointments(
        user_id=data.professional_id,
        availability_id=data.availability_id,
        customer_id=int(current_customer.id),
    )
    current_availability.status = "occupied"
    
    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)
    
    return { "msg": "Appointment created successfully" }


@router.put("/appointment/{appointment_id}")
def cancelAppointment(appointment_id, current_customer: Customers = Depends(get_current_customer), db: Session = Depends(get_db)):
    print(current_customer)
    query = db.query(Appointments).filter(Appointments.id  == appointment_id, Appointments.customer_id == current_customer.id).join(Appointments.availabilities).options(joinedload(Appointments.availabilities)).first()
    query.status = "canceled"
    query.availabilities.status = "available"
    
    db.commit()
    db.refresh(query)
    
    return { "msg": "appointment succesfully canceled!"}