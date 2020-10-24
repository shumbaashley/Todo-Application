import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>

            <div onClick={() => setCount(count+1)}>+</div>
            <div onClick={() => setCount(count-1)}>-</div>
            <li className="completed" key={todo._id}>
                                            <div className="form-check"> <label  className="form-check-label"> <input onClick={handleCompleted.bind(this, todo)} className="checkbox" type="checkbox"/> {todo.todo} <i className="input-helper"></i> </label> </div> <i onClick={deleteTodo.bind(this, todo)} className="remove mdi mdi-close-circle-outline"></i>
                                </li>

        </div>
    )
}

export default Counter;