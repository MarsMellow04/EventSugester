from flask import Flask, json, request, jsonify
from database import db, User

def login():
  request_data = request.get_json()
  given_email = request_data['email']
  if db.session.query(User).filter_by(email=given_email).first():
    return jsonify({"message":"Authorized"}),200
  else:
    return jsonify({"message":"Not authorized"}),404

def sign_up():
  request_data = request.get_json()
  given_email = request_data['email']
  given_name = request_data['name']
  given_department = request_data['department']

  new_user = User(
    email=given_email,
    name=given_name,
    department=given_department
  )

  db.session.add(new_user)
  db.session.commit()

  # user = request.args.get('email')
  return jsonify({"message": "User added"}), 403