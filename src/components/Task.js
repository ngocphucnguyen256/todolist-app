import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import Moment from 'react-moment'





const Task = (props) =>{
    const [isEdit, setIsEdit] = useState(false)
    const [taskId, setTaskId] = useState(null)
    const [taskName, setTaskName] = useState("")
    const [taskCreatedAt, setTaskCreatedAt] = useState(null)

	const inputRef= useRef()
    

    const forceUpdate = ()=>{
        props.update()
    }


    useEffect(() =>{
     
        setTaskName(props.name)
        setTaskCreatedAt(props.created)
        setTaskId(props.id)
    }, [props.created, props.name, props.id])



    useEffect(() =>{
        inputRef.current.focus()
    },[isEdit])

    function submitDelete() {
		axios
			.delete(`http://localhost:5000/api/todolist/${taskId}/delete`, {
				params:{
                    id: taskId
                }
			})
			.then(function () {
				console.log("Task deleted successfully");
                forceUpdate()
			})
			.catch(function () {
				console.log("Could not delete task. Please try again");
			});
	}



    const handleEditClick = () =>{
        setIsEdit(true)
    }




    const handleSaveClick = () =>{
        setIsEdit(false)
        axios
        .put(`http://localhost:5000/api/todolist/${taskId}/update`, {
            params:{
                id: taskId
            },
            task:  taskName,
            createdAt: new Date()
        })
        .then(function () {
            console.log("Task updated successfully");
            forceUpdate()
        })
        .catch(function () {
            console.log("Could not updated task. Please try again");
        });
    }
    

    return( 
        <div className="task card  mt-4 rounded-xl p-1 md:p-3 bg-green-300 text-black" >
            <div className="card-body">
                <input type="text" value={taskName} className="card-title bg-transparent text-2xl font-bold  mb-4" ref={inputRef}  disabled={!isEdit} onChange={(e) =>setTaskName(e.target.value)}>
                </input>
                <p className="card-text mb-2"><Moment toNow>{taskCreatedAt}</Moment></p>
                <div className="flex ">
                    <button type="button" className="btn btn-info mr-3 w-1/3 text-sm" onClick={handleEditClick}>Edit</button>
                    <button type="button" className="btn btn-success  mr-3 w-1/3 text-sm" onClick={handleSaveClick}>Save</button>
                    <button type="button" className="btn btn-danger w-1/3 text-sm" onClick={submitDelete}>Delete</button>
                </div>
            </div>
      </div>
    )


}


export default Task;