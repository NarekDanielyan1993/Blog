import React from 'react';

import "./BurgerMenuIcon.css";

function BurgerMenuIcon(props) {

    let buttonState="MenuIconOpen";
    if(props.menuState) {
        buttonState="MenuIconClose";
    }
    return (
        <div onClick={props.switchMenuState} className="MenuIcon" >
            <div className={buttonState} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default BurgerMenuIcon;

