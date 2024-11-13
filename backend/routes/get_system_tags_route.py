from flask import Flask, json, request, jsonify
from database import db, Tag

def get_system_tags():
  tags_to_return = []
  tags = Tag.query.all()

  if tags:
    for tag in tags:
        tags_to_return.append({"name":tag.name})
    return jsonify(tags_to_return), 200
  else:
     return jsonify({"error":"No tags found"}),404
