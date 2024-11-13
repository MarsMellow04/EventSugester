from database import db, Tag, Event
from flask import abort, jsonify
from util import get_user_from_context

def get_tags_dict(tags_filter):
  tags = [tag.name for tag in db.session.query(Tag).all()] and tags_filter

  return { tag:0 for tag in tags }

def populate_tags_dict(event, tags_dict):
  for user in event.attendees:
    for tag in user.user_tags:
      if tag.tag_name in tags_dict:
        tags_dict[tag.tag_name] += 1

def remove_zero_values(tags_dict):
  new_dict = {}

  for k,v in tags_dict.items():
    if v > 0:
      new_dict[k] = v
  
  return new_dict


def get_event_engagement(event_id):
  user = get_user_from_context()
  if not user: abort(401)

  event = db.session.query(Event).filter_by(id=event_id).first()
  if not event: abort(404)
  event_tags = [tag.name for tag in event.tags]

  if user.email != event.organiser_email: abort(403)

  engagement_dict = event.get_engagement_dict()
  tags_dict = get_tags_dict(event_tags)
  populate_tags_dict(event, tags_dict)

  return jsonify({
    **engagement_dict,
    'tags': remove_zero_values(tags_dict)
  })