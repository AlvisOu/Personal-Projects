import InputContainer from "./components/InputContainer"
import TaskContainer from "./components/TaskContainer"
import React from "react"
import { useState, useEffect } from 'react';
import api from './services/api';

export default function App() {

	const [tasks, setTasks] = useState([]); // State to store the tasks

	useEffect(() => {
		// Function to fetch tasks from the backend
		const fetchTasks = async () => {
			try {
				const response = await api.get('/user/tasks');
				setTasks(response.data.tasks);
				console.log('Tasks fetched:', response.data.tasks);
			} catch (error) {
				console.error('Error fetching tasks:', error);
			}
		};

		fetchTasks();
	}, []);
   
    //When tasks array changes, update local storage
    // React.useEffect( () => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks))
    // }, [tasks])

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

