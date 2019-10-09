import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import About from "../About";

class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <About />
      </div>
    );
  }
}

export default Main;
