import React, { useState } from 'react';
import axios from "axios";
import Todos from './Todos';


function Home() {

    const [todoData, setTodoData] = useState({todo : null});
    
    const url = "http://localhost:5000/api/todos"

    function handleChange(event) {
        setTodoData({todo: event.target.value});
    }
    
    function  handleSubmit(event) {
        event.preventDefault();
        axios.post(url, todoData)
        .then((res => {alert("Successfully added!")}))
        .catch(()=>alert("There was some error"))
    }




 
    return (
        <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">My Todo list</h4>
                        <div className="add-items d-flex"> <input onChange={handleChange} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"/> <button onClick={handleSubmit} className="add btn btn-primary font-weight-bold todo-list-add-btn">Add</button> </div>

                        <Todos/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}




export default Home