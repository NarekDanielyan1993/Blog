import React from 'react';


import Carrousel from "./Carrousel";
import CountDown from "../Featured/CountDown/CountDown";

import "./Featured.css";

function Featured() {
    return (
        <div className="Featured">
            <Carrousel />
            <div className="Name">
                <p>Arianna</p> 
                <p>grande</p>
            </div>
            <CountDown />
        </div>
    )
}

export default Featured;
