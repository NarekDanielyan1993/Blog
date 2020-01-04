import React from 'react';
import {scroller} from "react-scroll";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import "./SideDrawer.css";

const SideDrawer =  (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
           duration: 1500,
           delay: 100,
           smooth: true 
        });
        props.toggleSideMenu();
    };
        return (
            <div className={["SideDrawer", props.isOpen ? "Open" : "Close"].join(" ")} >
                <List component="nav">
                    <ListItem button onClick={() => scrollToElement("venueInfo")}>
                        VenueInfo
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement("highlights")}>
                        Highlights
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement("pricing")}>
                        Pricing
                    </ListItem>
                </List>
            </div>
        )
}

export default SideDrawer;
