import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container scroll-container" id="scroll">
          <div className="chevron chevron-light" />
          <div className="chevron chevron-light" />
          <div className="chevron chevron-light" />
        </div>
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
