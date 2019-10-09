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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ac leo in lectus pharetra porta at quis augue. In eros lectus,
              venenatis et enim eget, vestibulum tincidunt enim. Pellentesque
              venenatis eu eros sit amet blandit. Fusce venenatis nibh vel
              efficitur auctor. Nullam posuere fringilla magna. Integer mauris
              nulla, tempor a faucibus a, interdum id orci. Curabitur et sem
              ultricies, malesuada magna et, rutrum nulla. Mauris euismod
              pellentesque suscipit. Curabitur vel neque neque. Praesent
              dignissim tortor commodo ornare iaculis.
            </p>
            <p>
              Nullam id ullamcorper velit, nec cursus velit. Nam tincidunt
              turpis eu neque hendrerit, eget dignissim turpis iaculis. Quisque
              vehicula efficitur elit, non condimentum mi. Ut nec tortor ac mi
              scelerisque euismod. Integer leo sapien, cursus feugiat aliquet
              id, tincidunt a neque. Ut ac cursus ante. Suspendisse blandit
              condimentum turpis sit amet faucibus. Pellentesque enim arcu,
              ultricies sit amet ex vel, mattis pellentesque enim. Curabitur
              eleifend sit amet lectus sed efficitur. Cras ante odio, venenatis
              quis est quis, blandit imperdiet justo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
