from flask import Flask, json, request, jsonify
from database import db, Tag, UserTag, User
from util import get_user_from_context

TEMPLATE_EMAIL = "louis.cutteridge@stupidgoofy.com"
INITIAL_PROBABILITY = 0.7

def set_preference_tags():
  preferred_tags_list = request.get_json()
  user = get_user_from_context()
  tag = {'name':""}

  # This has to be changed to the one given in the url but ask Harry about that 
  linked_user = User.query.filter_by(email=user.email).first()
  if (not linked_user):
    return jsonify({"Error":"There is no linked user to set these tags to."}),400

  for tag in preferred_tags_list:
    linked_tag = Tag.query.filter_by(name=tag.get('name')).first()
    if (not linked_tag):
      return jsonify({"Error":f"There is no linked tag to set this preferred tag: {tag.get('name')} to."}),400

    new_preference_tag = UserTag (
      user = linked_user,
      tag = linked_tag,
      probability = INITIAL_PROBABILITY, 
    )

    db.session.add(new_preference_tag)
  db.session.commit()

  return jsonify({"Message":"Preferred tags added."}),200