from flask import Blueprint, jsonify, current_app, request

bp = Blueprint('user', __name__, url_prefix='/api/user')

@bp.route('/tasks', methods=['GET'])
def tasks():
    """
    Access all todo tasks.
    """
    return jsonify({'tasks': ['task1', 'task2', 'task3']})
    
