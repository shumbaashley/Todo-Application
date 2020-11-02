import React from 'react'


function Todo({id, todo, done, handleDelete, toggleDone}) {
    let name 

    if(done){
        name = "completed"
    }
    
    console.log(id, todo, done)

    return (
        <li key={id} className={name} >
            <div className="form-check"> <label className="form-check-label"  > <input onClick={(e) => toggleDone(id, !done)}  className="checkbox" type="checkbox"/> {todo} <i className="input-helper"></i></label> </div> <i onClick={(e) => handleDelete(id)} className="remove mdi mdi-close-circle-outline"></i>
        </li>
    )
}
export default Todo