from flask import request, abort
from database import db, Event
from util import get_user_from_context

def get_user_events():
  user = get_user_from_context()
  if not user: abort(403)

  user_events = db.session.query(Event).filter_by(organiser_email=user.email).all()
  return [event.get_dict() for event in user_events]