import React, {Component} from 'react'

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../UI/Backdrop/Backdrop";


import "./AppBar.css";

export default class AppBar extends Component {

    state = {
        isSideMenuOpen: false,
        isNavBackgroundColorShown: true
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScrollHandler);
    }

    onScrollHandler = () => {
        if(window.scrollY > 0) {
            this.setState({isNavBackgroundColorShown: false})
        } else {
            this.setState({isNavBackgroundColorShown: true})
        }
    }

    toggleSideMenu = () => {
        this.setState((prevState) => {
           return {isSideMenuOpen: !prevState.isSideMenuOpen}
           }
        )
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.isNavBackgroundColorShown ? "black" : "transparent"}} className="AppBar">
                <Toolbar switch={this.state.isSideMenuOpen} switchSideMenu={this.toggleSideMenu} />
                <SideDrawer isOpen={this.state.isSideMenuOpen} toggleSideMenu={this.toggleSideMenu} />
                <Backdrop toggleState={this.toggleSideMenu} isHidden={this.state.isSideMenuOpen} />
            </div>
        )
    }
}
