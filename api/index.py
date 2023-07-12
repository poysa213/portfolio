import os
from flask import Flask
from flask_mail import Mail, Message
from dotenv import load_dotenv


app = Flask(__name__)

load_dotenv('.env')

app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS').lower() == 'true'



mail = Mail(app)

@app.route("/api/email")
def index(body, email, first_name, last_name):
  msg = Message(f'Portfolio Contact form, {first_name} {last_name} {email}', sender = 'poysa213@gmail.com', recipients = ["youcef0hanaia@gmail.com"])
  msg.body = body
  mail.send(msg)
  return "Message sent!"


if __name__ == '__main__':
   app.run(debug = True)