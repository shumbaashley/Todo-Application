import React from 'react'
import axios from "axios"

function Todo(props) {
    let name 
    const url = "http://localhost:5000/api/todos"

    if(props.done){
        name = "completed"
    }
    
    
    function deleteTodo(todo){
        axios.delete(url + `/${todo}`)
        .then((res => {alert("Successfully deleted!")}))
        .catch(()=>alert("There was some error."))
    }

    function handleCompleted(todo){

        axios.put(url + `/${todo}`, {"done" : !props.done})
        .then((res => {alert("Updated")}))
        .catch(() => alert("There was some error"))

    }

    return (
        <li key={props.id} className={name} >
            <div onClick={handleCompleted.bind(this, props.id)} className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox"/> {props.todo} <i className="input-helper"></i></label> </div> <i onClick={deleteTodo.bind(this, props.id)} className="remove mdi mdi-close-circle-outline"></i>
        </li>
    )
}
export default Todo