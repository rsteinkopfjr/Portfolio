import React, { Component } from "react";
import "./skills.module.css";

class Skills extends Component {
  render() {
    return (
      <div className="container skillsSection">
        <div className="row">
          <div className="col-12">
            <h2 className="skillsHeader">Skills</h2>
          </div>
        </div>
        <div className="row skills">
          <div className="col-3">
              <h4>Javascript</h4>
          </div>
          <div className="col-3">
              <h4>HTML/CSS</h4>
          </div>
          <div className="col-3">
              <h4>Node.js</h4>
          </div>
          <div className="col-3">
              <h4>React.js</h4>
          </div>
        </div>
        <div className="row skills">
          <div className="col-3">
              <h4>MySQL</h4>
          </div>
          <div className="col-3">
              <h4>MongoDB</h4>
          </div>
          <div className="col-3">
              <h4>Creative Software</h4>
          </div>
          <div className="col-3">
              <h4>Video Production</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
