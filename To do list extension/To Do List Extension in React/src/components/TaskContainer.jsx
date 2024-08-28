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
        const value = props.listOfTasks[i]
        tasks.push(<Task 
            key = {i}
            id = {i}
            value = {value}
            deleteTask={()=>props.deleteTask(i)}
        />)
    }

    return(
        tasks
    )
}