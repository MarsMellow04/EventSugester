import numpy
from database import db, Event, Tag
from util import get_user_from_context
from flask import abort

persistance_cache = {}

def get_event_tag_vector(event, tags):
  vector = []

  for tag in tags:
    is_present = False
    for event_tag in event.tags:
      if event_tag.name == tag:
        vector.append(1)
        is_present = True
        break
    
    if not is_present:
      vector.append(0)

  return numpy.array(vector)

def get_user_tag_vector(user, tags):
  vector = []

  for tag in tags:
    is_present = False
    for user_tag in user.user_tags:
      if user_tag.tag_name == tag:
        vector.append(user_tag.probability)
        is_present = True
        break

    if not is_present:
      vector.append(0)

  return numpy.array(vector)

def get_next_recommended():
  user = get_user_from_context()
  if not user: abort(401)

  tags = [tag.name for tag in db.session.query(Tag).all()]
  events = db.session.query(Event).all()
  user_vector = get_user_tag_vector(user, tags)

  if not persistance_cache.get(user.email):
    persistance_cache[user.email] = []

  lastest_recommended = (None, None, None)

  for event in events:
    if event.id in persistance_cache[user.email]: continue

    event_vector = get_event_tag_vector(event, tags)

    angle = numpy.dot(user_vector, event_vector) / (numpy.linalg.norm(user_vector) * numpy.linalg.norm(event_vector))
    if lastest_recommended[2] is None or angle > lastest_recommended[2]:
      lastest_recommended = (event.id, event.get_dict(), angle)


  if lastest_recommended[0] is None: abort(404)
  
  persistance_cache[user.email].append(lastest_recommended[0])
  return lastest_recommended[1]