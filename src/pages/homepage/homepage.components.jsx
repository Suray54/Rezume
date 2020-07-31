import React, { Component } from "react";
import "./homepage.styles.scss";

import Navbar from "../../layouts/navbar/navbar.components";

import SectionOne from "../../components/section-one/section-one.component";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SectionOne />
      </div>
    );
  }
}
