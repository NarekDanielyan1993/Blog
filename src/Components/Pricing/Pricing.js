import React, { Component } from 'react';

import Button from "../../Components/UI/Button/Button1";
import "./Pricing.css";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {

    state = {
        prices: ["100", "150", "250"],
        positions: ["BALCONY", "MEDIUM", "STAR"],
        desc: [`the concert is going to happen only one time so if you just want 
                to be in that great atmosphere and seat place is not important for you , 
                in that case, the balcony will be the best choice.`,
               `Medium seats started from 150 dollars. 
                Hurry, because the more time is pasting 
                the fewer seats are left available.`,
                `The star seats are started from 250 dollars.`
            ],
       link: ["google.com", "haypost.am", "vlad.com"],
       delay: [500, 0, 500]
    }

    showBoxes = () => {
        return this.state.prices.map((box, i) => {
            return (
                <Zoom delay={this.state.delay[i] } key={i}>
                    <div className="Pricing_item">
                        <div className="place_price">
                            <p>{this.state.prices[i]}</p>
                            <span>{this.state.positions[i]}</span>
                        </div>
                            <p className="text"> 
                            {this.state.desc[i]}
                            </p>         
                        <Button bck_color="yellow" link={this.state.link[i]}>Purchase tickets</Button>
                    </div>
                </Zoom>
            )
        })
    }

    render() {
        return (
            <div className="Pricing_wrraper">
                <h4 className="Pricing_title">PRICING</h4>
                <div  className="Pricing_content">
                {this.showBoxes()}
                </div>
            </div>
        )
    }
}

export default Pricing;
