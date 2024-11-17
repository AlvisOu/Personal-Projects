from flask import Blueprint, jsonify, request
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
    
@bp.route('/tasks/delete/<int:id>', methods=['DELETE'])
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
    
@bp.route('/tasks/add', methods=['POST'])
def add_task():
    """
    Add a new task.
    """
    try:
        title = request.json.get('title')
        
        if not title:
            return jsonify({'message': 'Title is required.'}), 400
        
        new_task = Task(title=title)
        db.session.add(new_task)
        db.session.commit()
        
        return jsonify({
            'message': 'Task added successfully.', 
            'task': {"id": new_task.id, "title": new_task.title}
        }), 201
    
    except Exception as e:
        return jsonify({'message': 'An error occurred while adding the task.'}), 500