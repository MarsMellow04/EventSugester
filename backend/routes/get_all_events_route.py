from flask import request, abort
from database import db, Event
from util import get_user_from_context
import sys

def get_all_events():
  user = get_user_from_context()
  if not user: abort(403)

  all_events = db.session.query(Event).all()
  # print(user.email, file=sys.stderr)
  print (all_events[0].get_dict().items(), file=sys.stderr)
  return [event.get_dict() for event in all_events]