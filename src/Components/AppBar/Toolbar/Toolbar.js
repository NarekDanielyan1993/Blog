import React from 'react'
import Logo from "../Logo/Logo";
import BurgerMenuIcon from "../../UI/icons/BurgerMenuIcon/BurgerMenuIcon";

import "./Toolbar.css"; 

function Toolbar(props) {
    return (
        <div className="Toolbar">
            <Logo />
            <BurgerMenuIcon menuState={props.switch} switchMenuState={props.switchSideMenu}/>
        </div>
    )
}

export default Toolbar
