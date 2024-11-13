from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserTag(db.Model):
  __tablename__ = 'usertags'

  id = db.Column(db.Integer, primary_key=True)
  probability = db.Column(db.Float)
  #Tag association
  tag_name = db.mapped_column(db.ForeignKey('tag.name'))
  tag = db.relationship("Tag", back_populates="user_tags")
  #User association 
  user_email = db.mapped_column(db.ForeignKey('users.email'))
  user = db.relationship("User", back_populates="email")

