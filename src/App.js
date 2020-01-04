import React, {Component} from 'react';
import {Element} from "react-scroll";

import AppBar from "../src/Components/AppBar/AppBar.js";
import Featured from "../src/Components/Featured/Featured";
import VenueInfo from "../src/Components/VenueInfo/VenueInfo";
import Highlights from "../src/Components/Highlights/Highlights";
import Pricing from "../src/Components/Pricing/Pricing";
import Location from "../src/Components/Location/Location";
import Footer from "../src/Components/Footer/Footer";

import "../src/App.css";


class App extends Component {

  render() {
      return (
        <div className="App">
         <AppBar />
         <Featured />
         <Element name="venueInfo">
             <VenueInfo />
         </Element>
         <Element name="highlights">
             <Highlights />
         </Element>
         <Element name="pricing">
             <Pricing />
         </Element>
         <Location />
         <Footer />
        </div>
      );
  }
}

export default App;
