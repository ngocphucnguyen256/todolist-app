import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Task from './Task'



const Todolist = function (){
    const [newTask, setNewTask] = useState("")
    const [list, setList] = useState(null)
    const [update, setUpdate] = useState(0)
	

    useEffect(()=>{
        axios
        .get("http://localhost:5000/api/todolist")
        .then((res)=>{
			   setList(res.data)
        })
        .catch((error)=> console.log(error))
    }, [update])


	const  forceUpdate =()=>{
		let newUpdate = update +1
		setUpdate(newUpdate)
	}

    function submitForm(e) {
		e.preventDefault()
		if (newTask === "") {
			console.log("Please fill the username field");
			return;
		}
		axios
			.post("http://localhost:5000/api/todolist/add", {
				task: newTask
			})
			.then(function () {
				console.log("Task added successfully");
				setNewTask("")
				forceUpdate()

			})
			.catch(function () {
				console.log("Could not add task. Please try again");
			});
	}

	return (
		<div className="todolist ms-5">
			<h1>To do list</h1>
			{list === null ? (
				<p>Loading...</p>
			) : list.length === 0 ? (
				<p>No task available</p>
			) : (
				<>
					<h2>Task list</h2>
					<div>
						{list.map((item, index) => (
							<Task key={index} id={item._id} name={item.task} created={item.createdAt} update={forceUpdate}/>
						))}
					</div>
				</>
			)}

			<form onSubmit={(e)=>submitForm(e)}>
				<input value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
					type="text"
					placeholder="Enter your task"
				/>
				<input type="submit" />
			</form>
		</div>
	)
}

export default Todolist
