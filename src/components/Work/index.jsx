import React, { Component } from "react";
import styles from "./work.module.css";
import Bakery from "../../images/BakeryScreen.png";
import Clicky from "../../images/ClickyGameScreen.png";
import Flight from "../../images/TakeFlightScreen.png";
import Scraper from "../../images/ScraperScreen.png";

class Work extends Component {
  render() {
    return (
      <div className="container workSection">
        <div className="row">
          <div className="col-12">
            <h2 className="workHeader">Work</h2>
          </div>
        </div>
        <div className="row works">
          <div className="col-6">
            <a
              className={styles.projectLink}
              href="https://github.com/rsteinkopfjr/thebakery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>The Bakery</h4>
            </a>
            <img src={Bakery} height="200" width="400" alt="" />
          </div>
          <div className="col-6">
            <a
              className={styles.projectLink}
              href="https://github.com/rsteinkopfjr/clickygame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Clicky Game</h4>
            </a>
            <img src={Clicky} height="200" width="400" alt="" />
          </div>
        </div>
        <div className="row works">
          <div className="col-6">
            <a
              className={styles.projectLink}
              href="https://github.com/rsteinkopfjr/TakeFlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Take Flight</h4>
            </a>
            <img src={Flight} height="200" width="400" alt="" />
          </div>
          <div className="col-6">
            <a
              className={styles.projectLink}
              href="https://github.com/rsteinkopfjr/scraper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>News Scraper</h4>
            </a>
            <img src={Scraper} height="200" width="400" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
