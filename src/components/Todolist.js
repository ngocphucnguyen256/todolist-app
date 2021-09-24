import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import Task from './Task'
import addIcon from '../img/add.png'
import upIcon from '../img/up-arrow.png'


const Todolist = function (){
    const [newTask, setNewTask] = useState("")
    const [list, setList] = useState(null)
    const [update, setUpdate] = useState(0)
    const [isInput, setIsInput] = useState(false)

	const focusInput= useRef()

    useEffect(()=>{
        axios
        .get("http://localhost:5000/api/todolist")
        .then((res)=>{
			   setList(res.data)
        })
        .catch((error)=> console.log(error))
    }, [update])

	const showInput = ()=>{
		focusInput.current.focus()
		setIsInput( isInput => !isInput)
		
	}

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
		<div className="todolist  ml-10 mr-10 text-white">
			<h1 className="text-center text-6xl mt-8 mb-12 font-bold">To-Do List</h1>
			{list === null ? (
				<p>Loading...</p>
			) : list.length === 0 ? (
				<p>No task available</p>
			) : (
				<>
					<h2 className="text-xl font-bold">Task list</h2>
					<div className="flex justify-center">
						<div className="flex flex-wrap justify-start">
							{list.map((item, index) => (
								<Task key={index} id={item._id} name={item.task} created={item.createdAt} update={forceUpdate}/>
							))}
						</div>
					</div>
				</>
			)}
			<div className=" mt-4 fixed bottom-40 left-1/2">
				<button  className="w-14 block absolute left-1/2 transform -translate-x-1/2 opacity-70" onClick={showInput}><img src={isInput? upIcon : addIcon} alt="Add" /></button>
				<form onSubmit={(e)=>submitForm(e)} className={`text-black  p-4  justify-center  absolute left-1/2  transform -translate-x-1/2 translate-y-1/2 ${isInput? "flex" : "hidden"} `}>
					<input value={newTask}
						onChange={(e) => setNewTask(e.target.value)}
						ref={focusInput}
						type="text"
						placeholder="Enter your task"
						className="bg-yellow-300  rounded-xl p-4 block mr-2 placeholder-black"
					/>
		            <button type="submit" className="btn btn-success rounded-xl">Add</button>
			</form>
			</div>
		
			


		</div>
	)
}

export default Todolist
