import InputContainer from "./components/InputContainer"
import TaskContainer from "./components/TaskContainer"
import React from "react"
import { useState, useEffect } from 'react';
import api from './services/api';

export default function App() {

	const [tasks, setTasks] = useState([]); // State to store the tasks

	useEffect(() => {
		fetchTasks();
	}, []);

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

	function addTask(newTask){
		setTasks(prevTasks => [...prevTasks, newTask])
	}

	const deleteTask = async (id) => {
		try{
			const response = await api.delete(`/user/tasks/${id}`)	
			setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))			
		}
		catch(error){
			console.error('Error deleting task:', error);
		}
    };

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

