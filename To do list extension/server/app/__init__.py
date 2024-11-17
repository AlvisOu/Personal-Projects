from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# from flask_bcrypt import Bcrypt
# from flask_login import LoginManager

app = Flask(__name__)

# app.config['SECRET_KEY'] = 'eec4b7c68f1e3b68b32aeed2'
db = SQLAlchemy()
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
db.init_app(app)

# bcrypt = Bcrypt(app)

# login_manager = LoginManager(app)
# login_manager.login_view = "login_page"
# login_manager.login_message_category = "info"

CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

from .routes import register_routes
register_routes(app)

