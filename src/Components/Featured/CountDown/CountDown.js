import React, { Component } from 'react'

import "./CountDown.css";

export default class CountDown extends Component {

    state = {
        deadline: "June, 23, 2020",
        seconds: "",
        minutes: "",
        hours: "",
        days: ""
    }

    getTimeUntil = (date) => {
        const time = Date.parse(date) - Date.parse(new Date());
        if(time > 0) {
            let seconds = Math.floor((time/1000)%60);
            let minutes = Math.floor((time/(1000*60))%60);
            let hours =  Math.floor((time/(1000*60*60))%24);
            let days = Math.floor((time/(1000*60*60*24)));
            this.setState({seconds, minutes, hours, days});
        }
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }

    render() {
        return (
                <div className="CountDown">
                    <div className="CountDown_top">
                        <p>Events start in</p>
                    </div>
                    <div className="CountDown_bottom">
                        <div className="CountDown_item">
                            <div className="CountDown_time">
                                {this.state.days}       
                            </div>
                            <div className="CountDown_tag">
                                days
                            </div>
                        </div>
                        <div className="CountDown_item">
                            <div className="CountDown_time">
                            {this.state.hours}
                            </div>
                            <div className="CountDown_tag">
                                hr
                            </div>
                        </div>
                        <div className="CountDown_item">
                            <div className="CountDown_time">
                            {this.state.minutes}
                            </div>
                            <div className="CountDown_tag">
                                min
                            </div>
                        </div>
                        <div className="CountDown_item">
                            <div className="countDown_time">
                            {this.state.seconds}
                            </div>
                            <div className="CountDown_tag">
                                sec
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
