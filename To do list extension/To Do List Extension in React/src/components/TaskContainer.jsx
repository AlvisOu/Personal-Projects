import React from "react"
import Task from "./Task"

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