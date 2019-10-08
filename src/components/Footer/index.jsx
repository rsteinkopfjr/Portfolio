import React, { Component } from "react";
import styles from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-10 col-md-5">
              <h5 className={styles.title}>Robert Steinkopf Jr</h5>
              <p className={styles.description}>rob.steinkopf@gmail.com</p>
            </div>
            <div className="col-2">
              <ul className="list-unstyled">
                <li>
                  <a
                    className={styles.footerlink}
                    href="https://www.github.com/rsteinkopfjr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerlink}
                    href="https://www.instagram.com/rsteinkopf35/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerlink}
                    href="https://www.linkedin.com/in/rsteinkopfjr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className={styles.footerlink}
                    href="https://twitter.com/RobStank"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
