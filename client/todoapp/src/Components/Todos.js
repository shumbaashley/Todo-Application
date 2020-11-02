import React from 'react';
import Todo from './Todo'


function Todos({todos, handleDelete, toggleDone}) {


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
                                    handleDelete={handleDelete}
                                    toggleDone={toggleDone}
                                ></Todo>
                                        
                            )
                        }
                                
                    </ul>
                </div>
        )
    }

    return (
        <p class="loader"></p>

    )

}

export default Todos