from flask import Blueprint, jsonify
from ..models import Task, db

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
    
@bp.route('/tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    """
    Delete a task by id.
    """
    task = Task.query.get(id)
    
    if task:
        db.session.delete(task)
        db.session.commit()
        return jsonify({'message': 'Task deleted successfully.'}), 200
    else:
        return jsonify({'message': 'Task not found.'}), 404