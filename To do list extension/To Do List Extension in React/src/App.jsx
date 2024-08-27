import InputContainer from "./components/InputContainer"
import TaskContainer from "./components/TaskContainer"
import React from "react"

export default function App() {

	const [tasks, setTasks] = React.useState([])

	function addTask(newTask){
		setTasks(prevTasks => [...prevTasks, newTask])
	}

	function deleteTask(id){
		setTasks(prevTasks => [...prevTasks.slice(0, id), ...prevTasks.slice(id + 1)])
	}

	return (
		<div className ="container">
			<InputContainer 
				addTask = {addTask}
			/>
			<TaskContainer 
				listOfTasks = {tasks}
				deleteTask = {deleteTask}
			/>
		</div>
	)
}

