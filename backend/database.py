from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(32), index=True)
  description = db.Column(db.String(5120))
  tags = db.relationship("Tag", secondary='taglookup', back_populates='events')
  organiser_email = db.Column(db.String(128), db.ForeignKey('users.email'))
  organiser = db.relationship("User", back_populates="organised_events")
  attendees = db.relationship("User", secondary='eventsignup', back_populates='signedup_events')
  max_attendees = db.Column(db.Integer)
  current_attendees = db.Column(db.Integer)
  
  impressions = db.Column(db.Integer)
  num_shares = db.Column(db.Integer)
  num_likes = db.Column(db.Integer)

  # WE MUST NOT OVERRIDE __dict__ method!!!!!!
  def get_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "description": self.description,
      "tags": [str(tag) for tag in self.tags],
      "organiser_email": self.organiser_email,
      "max_attendees": self.max_attendees,
      "current_attendees": self.current_attendees
    }
  
  def get_engagement_dict(self):
    return {
      "impressions": self.impressions,
      "num_shares": self.num_shares,
      "num_likes": self.num_likes
    }


class TagLookup(db.Model):
  __tablename__ = 'taglookup'

  event_id = db.Column(db.Integer,db.ForeignKey('events.id'), primary_key=True)
  tag_name = db.Column(db.String(32),db.ForeignKey('tags.name'), primary_key=True)

class Tag(db.Model):
  __tablename__ = 'tags'

  name = db.Column(db.String(32), primary_key=True)
  user_tags = db.relationship("UserTag", back_populates="tag")
  events = db.relationship("Event", secondary='taglookup', back_populates='tags')

  def __str__(self):
    return self.name

class UserTag(db.Model):
  __tablename__ = 'usertags'

  id = db.Column(db.Integer, primary_key=True)
  probability = db.Column(db.Float)
  #Tag association
  tag_name = db.Column(db.String(32),db.ForeignKey('tags.name'))
  tag = db.relationship("Tag", back_populates="user_tags")
  #User association 
  user_email = db.Column(db.String(128),db.ForeignKey('users.email'))
  user = db.relationship("User", back_populates="user_tags")

class User(db.Model):
  __tablename__ = 'users'

  email = db.Column(db.String(128), primary_key=True)
  name = db.Column(db.String(128))
  department = db.Column(db.String(128))

  user_tags = db.relationship('UserTag', back_populates='user')
  organised_events = db.relationship("Event", back_populates="organiser")
  signedup_events = db.relationship("Event", secondary='eventsignup', back_populates='attendees')

class EventSignup(db.Model):
  __tablename__ = 'eventsignup'

  user_email = db.Column(db.Integer, db.ForeignKey('users.email'), primary_key=True)
  event_id = db.Column(db.String(32), db.ForeignKey('events.id'), primary_key=True)