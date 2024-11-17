from flask import Blueprint, jsonify
from ..models import Task

bp = Blueprint('user', __name__, url_prefix='/api/user')

@bp.route('/tasks', methods=['GET'])
def tasks():
    """
    Access all todo tasks.
    """
    tasks = Task.query.all()

    tasks_data = [{"id": task.id, "title": task.title} for task in tasks]

    # Return the tasks as JSON
    return jsonify({'tasks': tasks_data})
    
