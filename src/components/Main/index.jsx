import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Skills from "../Skills";

class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <About />
        <Skills />
      </div>
    );
  }
}

export default Main;
