import React, { Component } from 'react';
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import "./Discount.css";
import Button from "../../UI/Button/Button1";

export default class Discount extends Component {

    state = {
        discount: 0,
        discount_max: 23
    }

    showMaxDiscount = () => {
        if(this.state.discount < this.state.discount_max) {
            this.setState((PrevState => {
                return {discount: PrevState.discount + 1}
            }))
        }
    }

    componentDidUpdate() {
        setTimeout(() => this.showMaxDiscount(), 30);
    }
    
    render() {
        return (
            <div className="Discount">
                <Fade onReveal= {() => this.showMaxDiscount()}>
                    <div className="Discount_percentage">
                        <span>{this.state.discount}</span> 
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="Discount_description">
                        <p className="Discount_description_title">Purchase tickets before 20th june</p>
                        <p className="Discount_description_content">
                            People, who will buy a ticket until 20 june, will get up to 23 percent discount for each seat.
                        </p>
                        <Button bck_color="yellow">Purchase</Button>
                    </div>
                </Slide>
            </div>
        )
    }
}
