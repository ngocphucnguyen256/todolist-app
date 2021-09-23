import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Moment from 'react-moment'





const Task = (props) =>{
    const [isEdit, setIsEdit] = useState(false)
    const [taskId, setTaskId] = useState(null)
    const [taskName, setTaskName] = useState("")
    const [taskCreatedAt, setTaskCreatedAt] = useState(null)


    

    const forceUpdate = ()=>{
        props.update()
    }


    useEffect(() =>{
     
        setTaskName(props.name)
        setTaskCreatedAt(props.created)
        setTaskId(props.id)
    }, [props.created, props.name, props.id])



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
        <div className="task card  mt-4" style={{width: "18rem"}}>
            <div className="card-body">
                <input type="text" value={taskName} className="card-title"  disabled={!isEdit} onChange={(e) =>setTaskName(e.target.value)}>
                </input>
                <p className="card-text"><Moment toNow>{taskCreatedAt}</Moment></p>
                <button type="button" className="btn btn-info" onClick={handleEditClick}>Edit</button>
                <button type="button" className="btn btn-success" onClick={handleSaveClick}>Save</button>
                <button type="button" className="btn btn-danger" onClick={submitDelete}>Delete</button>
            </div>
      </div>
    )


}


export default Task;