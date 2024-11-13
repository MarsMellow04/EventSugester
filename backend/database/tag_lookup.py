from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class TagLookup(db.Model):
  __tablename__ = 'taglookup'

  event_id = db.mapped_column(db.ForeignKey('events.id'), primary_key=True)
  tag_name = db.mapped_column(db.ForeignKey('tags.name'), primary_key=True)