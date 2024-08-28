import InputContainer from "./components/InputContainer"
import TaskContainer from "./components/TaskContainer"
import React from "react"

export default function App() {

	const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))

    //state variable tasks is initialized depending on whether local storage returns null
    const [tasks, setTasks] = tasksFromLocalStorage ? React.useState(tasksFromLocalStorage) : React.useState([])
   
    //When tasks array changes, update local storage
    React.useEffect( () => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

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

