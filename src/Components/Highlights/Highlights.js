import React, { Component } from 'react'

import Discription from "./Description/Description";
import Discount from "../Highlights/Discount/Discount";

import "../Highlights/HIghlights.css";


export default class Highlights extends Component {
    render() {
        return (
            <div className="Highlights">
                <Discription />
                <Discount />
            </div>
        )
    }
}
