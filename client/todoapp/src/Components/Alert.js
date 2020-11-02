import React from 'react'

function Alert(props){
    return (
        <div className="alert success">
        <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        {props.message}
        </div>
    )
}

export default Alert