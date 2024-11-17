from flask import Flask
from flask_cors import CORS
from .routes import register_routes
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__)

def create_app():
    """Application function for creating the Flask app instance."""
    app = Flask(__name__)

    # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'

    # app.config['SECRET_KEY'] = 'eec4b7c68f1e3b68b32aeed2'
    # db = SQLAlchemy(app)
    # bcrypt = Bcrypt(app)

    # login_manager = LoginManager(app)
    # login_manager.login_view = "login_page"
    # login_manager.login_message_category = "info"

    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

    register_routes(app)

    return app
