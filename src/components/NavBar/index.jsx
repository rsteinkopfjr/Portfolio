import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Switch from "react-switch";
import styles from "./navbar.module.css";
import logo from "../../images/RSLogo.png";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
class NavBar extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.skipLink}>
          <a href="#mainContent">Skip to Main Content</a>
        </div>
        <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="70" height="70" alt="" />
          </Link>
          {/* <div className="navbar-nav">
            <label htmlFor="icon-switch">
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 15,
                      color: "orange",
                      paddingRight: 2
                    }}
                  >
                    Off
                  </div>
                }
                checkedIcon={
                  <svg
                    viewBox="0 0 10 10"
                    height="100%"
                    width="100%"
                    fill="aqua"
                  >
                    <circle r={3} cx={5} cy={5} />
                  </svg>
                }
                className="react-switch"
                id="icon-switch"
              />
            </label>
          </div> */}
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
