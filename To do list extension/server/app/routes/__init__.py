# from .auth import bp as auth_bp
from .user import bp as user_bp

def register_routes(app):
    # app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)