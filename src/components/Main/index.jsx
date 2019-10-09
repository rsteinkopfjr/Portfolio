import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Skills from "../Skills";
import Work from "../Work";

class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <About />
        <Skills />
        <Work />
      </div>
    );
  }
}

export default Main;
