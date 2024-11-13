from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Tag(db.Model):
  __tablename__ = 'tags'

  name = db.mapped_column(db.String(32), primary_key=True)
  user_tags = db.relationship("UserTag", back_populates="Tag")
  events = db.relationship(secondary='taglookup', back_populates='tags')