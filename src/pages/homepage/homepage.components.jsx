import React, { Component } from "react";
import "./homepage.styles.scss";

import Navbar from "../../layouts/navbar/navbar.components";

import SectionOne from "../../components/section-one/section-one.component";
import SectionTwo from "../../components/section-two/section-two.component";
import SectionThree from "../../components/section-three/section-three.component";
import SectionFour from "../../components/section-four/section-four.component";

export default class Homepage extends Component {
  render() {
    return (
      <div data-spy="scroll" data-target=".navbar" data-offset="50">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    );
  }
}
