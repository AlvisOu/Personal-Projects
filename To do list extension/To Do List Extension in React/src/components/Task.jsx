import React from "react"

export default function Task(props){

    const [completion, setCompletion] = React.useState(false)

    function toggleComplete(){
        setCompletion(prevState => !prevState)
    }

    return (
        <div className="task" id={props.id}>
            <li style={completion ? {textDecoration: 'line-through'} : {} }>{props.value}</li>
            <button 
                className="complete-btn" 
                onClick={toggleComplete}
                >
                <i className={!completion ? "fa-solid fa-check" : "fa-solid fa-rotate-right"}></i>
            </button>
            <button 
                className="delete-btn" 
                onClick={props.deleteTask}
                >
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    )
}