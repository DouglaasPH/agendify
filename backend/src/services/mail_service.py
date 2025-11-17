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
        subject="Agendify - Verify Email",
        recipients=[recipient_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)


async def send_login_email(username: str, recipient_email: str):
    html_content = templates_env.get_template("login_email.html").render(username=username)
    
    message = MessageSchema(
        subject="Agendify - Login",
        recipients=[recipient_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)


async def send_password_reset_email(user_name: str, user_email: str, reset_link: str):
    html_content = templates_env.get_template("password_reset_email.html").render(user_name=user_name, user_email=user_email, reset_link=reset_link)

    message = MessageSchema(
        subject="Agendify – Password reset request",
        recipients=[user_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)


async def send_email_change_confirmation(user_name: str, old_email: str, new_email: str, confirm_link: str):
    html_content = templates_env.get_template("email_change_confirmation.html").render(user_name=user_name, old_email=old_email, new_email=new_email, confirm_link=confirm_link)
    
    message = MessageSchema(
        subject="Agendify – Confirm your new email address",
        recipients=[new_email],
        body=html_content,
        subtype="html"
    )
    
    fm = FastMail(conf)
    await fm.send_message(message)