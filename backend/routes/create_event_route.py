import logging
import os
from flask import Flask, json, request, jsonify, abort
from database import db, User, Tag, Event, TagLookup
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from util import get_user_from_context
from local_secrets import get_slack_token

# ID of channel you want to post message to
CHANNEL_ID = "C080FNL0QES"
slack_token = get_slack_token()
INITAL_FEEDBACK=0

def create_event():
  request_data = request.get_json()
  organiser = get_user_from_context()
  tags = create_tags_from_event(request_data['description'])

  if (not organiser) or (not tags):
     return jsonify({'error': "bad error"}, 400)

  new_event = Event(
    name=request_data['name'],
    description=request_data['description'],
    organiser=organiser,
    tags=tags,
    max_attendees = request_data['max_attendees'],
    current_attendees = 1,
    impressions=INITAL_FEEDBACK,
    num_shares=INITAL_FEEDBACK,
    num_likes=INITAL_FEEDBACK
  )

  print(new_event.tags, flush=True)

  db.session.add(new_event)
  db.session.commit()

  result = send_message_to_slack(new_event)
  return jsonify (new_event.id),200


def send_message_to_slack(given_event:Event):
  try:
      # WebClient instantiates a client that can call API methods
      client = WebClient(token=slack_token)
      logger = logging.getLogger(__name__)
      # Call the conversations.list method using the WebClient
      result = client.chat_postMessage(
          channel=CHANNEL_ID,
          text=f"New Event: *{given_event.description}*",
          blocks= [
             {
              "type": "header",
              "text": {
                "type": "plain_text",
                "text": f"{given_event.name}"
              }},
              {
                "type": "section",
                "block_id": "event_details",
                "fields": [
                  {
                    "type": "mrkdwn",
                    "text": "*Date:* 2024-12-25"
                  },
                  {
                    "type": "mrkdwn",
                    "text": "*Time:* 3:00 PM"
                  },
                  {
                    "type": "mrkdwn",
                    "text": f"*Capacity*: {given_event.max_attendees}"
                  },
                  {
                    "type": "mrkdwn",
                    "text": f"*Signed Up*: {given_event.current_attendees}"
                  }
                ]},
              {
                "type": "section",
                "block_id": "event_description",
                "text": {
                  "type": "mrkdwn",
                  "text": f"{given_event.description}"
                }
              },
              {
                 "type":"section",
                 "block_id":"organizer_description",
                 "text": {
                  "type": "mrkdwn",
                  "text": f"If there are any issues, please contact {given_event.organiser_email}"
                 }
              },
              {
                 "type":"image",
                 "block_id":"event_image",
                 "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/IBM_logo_in.jpg/1200px-IBM_logo_in.jpg",
                 "alt_text": "Default image"
              }
              ]
      )
      return jsonify(result.data),200

  except SlackApiError as e:
      print(e,flush=True)
      abort(501)

def create_tags_from_event(given_description):
    tags = Tag.query.all() 
    tags_to_add = []
    splitted_corpus = given_description.split()
    for word in splitted_corpus:
       for tag in tags:
          if word.lower() == str(tag).lower():
             tags_to_add.append(tag)
    print(tags_to_add, flush=True)
    return tags_to_add 
