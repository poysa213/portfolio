import os
from flask import Flask, request
from flask_mail import Mail, Message
from dotenv import load_dotenv


app = Flask(__name__)

load_dotenv('.env')

app.config['MAIL_SERVER'] = "smtp.gmail.com"
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True



mail = Mail(app)

@app.route("/api/email", methods=['POST'])
def send_email():
    data = request.get_json()
    message = data.get("message")
    email = data.get("email")
    name = data.get("name")
    subject = data.get("subject")

    msg = Message(f"Portfolio Contact form, {subject} {name} {email}", sender="poysa213@gmail.com", recipients=["youcef0hanaia@gmail.com"])
    msg.body = message
    mail.send(msg)
    
    return "Message sent!"


if __name__ == '__main__':
   app.run(debug = True)