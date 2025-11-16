from fastapi_mail import FastMail, MessageSchema
from mail_config import conf, templates_env

async def send_welcome_email(username: str, recipient_email: str):
    html_content = templates_env.get_template("welcome_email.html").render(username=username)
    
    message = MessageSchema(
        subject="Welcome to Agendify!",
        recipients=[recipient_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)


async def send_verification_email(verification_link: str, recipient_email: str):
    html_content = templates_env.get_template("verification_email.html").render(verification_link=verification_link)
    
    message = MessageSchema(
        subject="Verify Email",
        recipients=[recipient_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)


async def send_login_email(username: str, recipient_email: str):
    html_content = templates_env.get_template("login_email.html").render(username=username)
    
    message = MessageSchema(
        subject="Agendify Login",
        recipients=[recipient_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)
