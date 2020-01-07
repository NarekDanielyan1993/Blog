import React from 'react';
import Div100vh from 'react-div-100vh';


import Carrousel from "./Carrousel";
import CountDown from "../Featured/CountDown/CountDown";

import "./Featured.css";

function Featured() {
    return (
        <Div100vh className="Featured">
            <Carrousel />
            <div className="Name">
                <p>Arianna</p> 
                <p>grande</p>
            </div>
            <CountDown />
        </Div100vh>
    )
}

export default Featured;
