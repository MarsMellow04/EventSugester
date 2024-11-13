from database import db, User
from flask import request

def get_user_from_context():
  '''
  Get user object from the current Flask request context
  '''
  
  email = request.headers.get('X-Email')
  return db.session.query(User).filter_by(email=email).first() if email else None