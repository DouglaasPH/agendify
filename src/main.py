from contextlib import asynccontextmanager
from fastapi import FastAPI

from database import engine, Base
from controllers import auth


@asynccontextmanager
async def lifespan(app: FastAPI):
    from models.appointments import Appointments      # noqa
    from models.availabilities import Availabilities  # noqa
    from models.users import Users                    # noqa
    
    Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(lifespan=lifespan)
app.include_router(auth.router)