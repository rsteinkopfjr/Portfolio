import React, { Component } from "react";
import "./about.module.css";

class About extends Component {
  render() {
    return (
      <div className="container aboutSection">
        <div className="row">
          <div className="col-12">
            <h2>About</h2>
            <p>
              I am a full stack developer based in New Jersey, where we put
              Taylor Ham (not pork roll) on our breakfast sandwich. As a video
              editor turned developer, blending creative and technical concepts
              means a lot to me. I aim for performance, simplicity and integrity
              to create compelling cross-platform experiences, experimenting
              with the latest technologies to squeeze the most from any device.
              I enjoy creating side projects outside of my working life to share
              and engage with others.
            </p>
            <p>
              I work daily with creative softwares whether that's After Effects,
              Illustrator, or Photoshop. Popular libraries and frameworks I've
              used include Express, JQuery, MongoDB, Passport, React, Socket IO,
              Yarn/npm, and more
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
