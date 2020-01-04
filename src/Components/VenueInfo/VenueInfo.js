import React from 'react'

import Zoom from "react-reveal/Zoom";

import "./VenueInfo.css";
import calendar from "../../resources/images/icons/calendar.png";
import location from  "../../resources/images/icons/location.png";

function VenueInfo() {
    return (
        
        <div className="VenueInfo">
            <Zoom delay={500}>
                <div className="vn_item ">
                    <div className="vn_icon_square bck_red"></div>
                    <div className="vn_icon" 
                         style={{backgroundImage: `url(${calendar})`}}>
                    </div>
                    <div className="Venue_date">
                        <p className="vn_title">Event Date and Time</p>
                        <p className="vn_desc">7 August 2019 10:00pm</p>
                    </div>
                </div>
            </Zoom>
            <Zoom delay={1500}>
                <div className="vn_item">
                    <div className="vn_icon_square bck_yellow"></div>
                    <div className="vn_icon"  style={{backgroundImage: `url(${location})`}}>
                        
                    </div>
                    <div className="Venue_Location">
                        <p className="vn_title">Event location</p>
                        <p  className="vn_desc">345 Speer street Oakland CA 1986</p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default VenueInfo
