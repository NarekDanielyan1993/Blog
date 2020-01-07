import React from 'react'

import Slider from "react-slick";

import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg"

function Carrousel() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true
      };

    return (
        <div style={{overflow: `hidden`, height: `${window.innerHeight}px`}}>
            <Slider {...settings}>
               <div> 
                   <div  style={{
                       backgroundImage: `url(${slide_one})`, 
                       height: `${window.innerHeight}px`,
                       backgroundSize: `100% 100%`,
                       backgroundRepeat: "no-repeat",
                       backgroundPosition: `center`}}>
                   </div>
                </div>
                <div> 
                   <div style={{
                       backgroundImage: `url(${slide_two})`, 
                       height: `${window.innerHeight}px`,
                       backgroundSize: `100% 100%`,
                       backgroundRepeat: "no-repeat" }}>
                   </div>
                </div>
                <div> 
                   <div style={{
                       backgroundImage: `url(${slide_three})`, 
                       height: `${window.innerHeight}px`,
                       backgroundSize: `100% 100%`,
                       backgroundRepeat: "no-repeat" }}>
                   </div>
                </div>
            </Slider>    
        </div>
    )
}

export default Carrousel
