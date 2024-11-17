import React from "react"
import Task from "./Task"
/*
*   props:
*       -listOfTasks: the array of tasks stored in the state variable tasks
*       -deleteTask: function that deletes a task
*/
export default function TaskContainer(props){

    const listOfTasks = props.listOfTasks

    const tasks = []
    for (let i = 0; i<listOfTasks.length; i++){
        const task = props.listOfTasks[i]
        const id = task.id
        const value = task.title
        tasks.push(<Task 
            key = {id}
            id = {id}
            value = {value}
            deleteTask={()=>props.deleteTask(id)}
        />)
    }

    return(
        tasks
    )
}