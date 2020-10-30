import React, { Component } from "react";
import "./navbar.styles.scss";
import Scrollspy from "react-scrollspy";
import Resume from "./../../assets/Resume.pdf";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg fixed-top " id="pb-navbar">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample09"
            >
              <ul className="navbar-nav">
                <Scrollspy
                  className="scrollspy"
                  items={[
                    "section-home",
                    "section-portfolio",
                    "section-resume",
                    "section-about",
                    "section-services",
                    "section-contact",
                  ]}
                  currentClassName="isCurrent"
                >
                  <li className="nav-item">
                    <a className="nav-link" href="#section-home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-resume">
                      Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-services">
                      services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section-contact">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://suray54.github.io/blog/"
                    >
                      Blog
                    </a>
                  </li>
                </Scrollspy>
                <div className="button">
                  <a href={Resume} className="button__CV">
                    Download CV
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
