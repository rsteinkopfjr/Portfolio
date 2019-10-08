import React, { Component } from "react";
import "./jumbotron.module.css";
import letterH from "../../images/Alphabet/DarkTheme/h-light-full.png";
import letterI from "../../images/Alphabet/DarkTheme/i-light-full.png";
import letterM from "../../images/Alphabet/DarkTheme/m-light-full.png";
import letterR from "../../images/Alphabet/DarkTheme/r-light-full.png";
import letterO from "../../images/Alphabet/DarkTheme/o-light-full.png";
import letterB from "../../images/Alphabet/DarkTheme/b-light-full.png";
import space from "../../images/Alphabet/DarkTheme/space.png";
import apostrophe from "../../images/Alphabet/DarkTheme/apostrophe-light-full.png";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron" id="alphatron">
        <div className="container">
          <div className="customLetters">
            <img
              src={letterH}
              className="letterH"
              alt="h"
            />
            <img
              src={letterI}
              className="letterI"
              alt="i"
            />
            <img
              src={space}
              className="space"
              alt="blank"
            />
            <img
              src={letterI}
              className="letterI"
              alt="i"
            />
            <img
              src={apostrophe}
              className="apostrophe"
              alt="apostrophe"
            />
            <img
              src={letterM}
              className="letterM"
              alt="m"
            />
            <img
              src={space}
              className="space"
              alt="blank"
            />
            <img
              src={letterR}
              className="letterR"
              alt="r"
            />
            <img
              src={letterO}
              className="letterO"
              alt="o"
            />
            <img
              src={letterB}
              className="letterB"
              alt="b"
            />
          </div>
          <div className="typeCarousel">
            <h1>
              I am a 
              <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ " full stack developer.", " movie buff.", " sourdough enthusiast.", " sports fanatic.", " homebrewer." ]'
              ></span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
