import React from 'react'

import "./Button.css";

export default function Button(props) {
    return (
        <div>
            <button className="Button" onClick={props.click}>{props.children}</button>
        </div>
    )
}
