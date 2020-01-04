import React from 'react';

import Button from "@material-ui/core/Button";
import "./Button.css";

import icon from "../../../resources/images/icons/ticket.png";

export default function Button1(props) {
    return (
        <div>
            <Button variant="contained" size="small" style={{backgroundColor: props.bck_color}} href={props.link}>
            <img src={icon} style={{width: "25px", height:"25px", marginRight: "5px"}} alt="button" />
            {props.children}</Button>    
        </div>
    )
}


