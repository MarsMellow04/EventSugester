from database import db, Event
from flask import abort

def get_event_info(event_id):
  obj = db.session.query(Event).filter_by(id=event_id).first()
  return obj.get_dict() if obj != None else abort(404)