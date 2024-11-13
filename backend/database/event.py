from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(32), index=True)
  description = db.Column(db.String(5120))
  tags = db.relationship(secondary='taglookup', back_populates='events')
  organiser_email = db.mapped_column(db.ForeignKey('users.email'))
  organiser = db.relationship("User", back_populates="organised_events")
  max_attendees = db.Column(db.Integer)
  current_attendees = db.Column(db.Integer)
  
  impressions = db.Column(db.Integer)
  num_shares = db.Column(db.Integer)
  num_likes = db.Column(db.Integer)


