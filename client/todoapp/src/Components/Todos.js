import React, { useState, useEffect } from 'react';
import axios from "axios";
import Todo from './Todo'


function Todos() {

    const [todos, setTodos] = useState(null);
    
    const url = "http://localhost:5000/api/todos"
    useEffect(() => {
        axios.get(url)
        .then(res => setTodos(res.data))
        .catch(() => alert("There was some error.")
        )
    }, [url]);


    if(todos){
        return (
                <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                        {
                            todos.map(todo => 
                                        
                                <Todo 
                                    id={todo._id}
                                    todo={todo.todo}
                                    done={todo.done}
                                ></Todo>
                                        
                            )
                        }
                                
                    </ul>
                </div>
        )
    }

    return (
        <p>Loading...</p>
    )

}

export default Todos