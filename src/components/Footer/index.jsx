import React, { Component } from "react";
import styles from "./footer.module.css";
import GitLogo from "../../images/Logos/GitHubWhite.png";
import InstaLogo from "../../images/Logos/InstaWhite.png";
import LinkedLogo from "../../images/Logos/LinkedWhite.png";
import TwitterLogo from "../../images/Logos/TwitterWhite.png";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h5 className={styles.title}>Rob.steinkopf@gmail.com</h5>
            </div>
            <div className="col-1">
              <a
                className={styles.footerlink}
                href="https://www.github.com/rsteinkopfjr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitLogo} height="25" width="25" alt="GitHub" />
              </a>
            </div>
            <div className="col-1">
              <a
                className={styles.footerlink}
                href="https://www.instagram.com/rsteinkopf35/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstaLogo} height="25" width="25" alt="Instagram" />
              </a>
            </div>
            <div className="col-1">
              <a
                className={styles.footerlink}
                href="https://www.linkedin.com/in/rsteinkopfjr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedLogo} height="25" width="25" alt="LinkedIn" />
              </a>
            </div>
            <div className="col-1">
              <a
                className={styles.footerlink}
                href="https://twitter.com/RobStank"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TwitterLogo} height="25" width="25" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
