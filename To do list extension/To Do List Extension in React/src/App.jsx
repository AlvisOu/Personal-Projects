import InputContainer from "./components/InputContainer"
import TaskContainer from "./components/TaskContainer"
import React from "react"

export default function App() {

	const [tasks, setTasks] = React.useState([])

	function addTask(newTask){
		setTasks(prevTasks => [...prevTasks, newTask])
	}

	return (
		<div className ="container">
			<InputContainer 
				addTask = {addTask}
			/>
			<TaskContainer 
				listOfTasks = {tasks}
			/>
		</div>
	)
}

