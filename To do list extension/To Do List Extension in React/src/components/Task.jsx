import React from "react"

export default function Task(props){
    return (
        <div className="task" id={props.id}>
            <li>{props.value}</li>
            <button 
                className="complete-btn" 
                onClick={() => props.completeTask(props.id)}
                >
                <i className="fa-solid fa-check"></i>
            </button>
            <button 
                className="delete-btn" 
                onClick={() => props.deleteTask(props.id)}
                >
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    )
}