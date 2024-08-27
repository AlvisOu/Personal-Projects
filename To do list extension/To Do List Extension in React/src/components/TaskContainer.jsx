import React from "react"
import Task from "./Task"

export default function TaskContainer(props){

    const listOfTasks = props.listOfTasks

    function completeTask(id){
        
    }

    function deleteTask(id){

    }

    const tasks = []
    for (let i = 0; i<listOfTasks.length; i++){
        const value = props.listOfTasks[i]
        tasks.push(<Task 
            key = {i}
            id = {i}
            value = {value}
            completeTask={completeTask}
            deleteTask={deleteTask}
        />)
    }

    return(
        tasks
    )
}