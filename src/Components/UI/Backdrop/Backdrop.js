import React from 'react'

import "./Backdrop.css";

function Backdrop(props) {
    return (
        <div onClick={props.toggleState} className={["Backdrop", props.isHidden ? "Show" : "Hide"].join(" ")} >
            
        </div>
    )
}

export default Backdrop
