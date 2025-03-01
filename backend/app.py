from flask import Flask, request
import database
from flask_cors import CORS
from routes import login_route, get_system_tags_route, set_preference_tags_route, get_next_recommended_route, create_event_route, get_user_events_route, get_event_info_route, set_event_engagement_route, get_event_engagement_route

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
database.db.init_app(app)

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    return response

@app.route("/", methods=['GET'])
def default_route():
    return 'Hello, world'

@app.route('/api/login', methods=['POST'])
def login():
    return login_route.login()

@app.route('/api/GetSystemTags', methods=['GET'])
def get_system_tags():
    return get_system_tags_route.get_system_tags()

@app.route('/api/SetPreferenceTags', methods=['POST'])
def set_preference_tags():
    return set_preference_tags_route.set_preference_tags()

@app.route('/api/GetNextRecommended', methods=['GET'])
def get_next_recommended():
    return get_next_recommended_route.get_next_recommended()

@app.route('/api/event', methods=['POST'])
def event():
    return create_event_route.create_event()

@app.route('/api/GetUserEvents', methods=['GET'])
def get_user_events():
    return get_user_events_route.get_user_events()

@app.route('/api/event/<int:event_id>', methods=['GET', 'POST'])
def event_route(event_id):
    if request.method == 'GET':
      return get_event_info_route.get_event_info(event_id)
    elif request.method == 'POST':
      return set_event_engagement_route.set_event_engagement(event_id)
    
@app.route('/api/event/<int:event_id>/feedback', methods=['GET'])
def get_event_feedback(event_id):
    return get_event_engagement_route.get_event_engagement(event_id)

if __name__ == "__main__":
    with app.app_context():
        database.db.create_all()

    app.run()
