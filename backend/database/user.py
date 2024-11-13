from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  email = db.mapped_column(db.String(128), primary_key=True)
  name = db.Column(db.String(128))
  department = db.Column(db.String(128))
  users_tags = db.relationship('UserTag', back_populates='user')
  organised_events = db.relationship("Event", back_populates="organiser")