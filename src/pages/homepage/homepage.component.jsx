import React, { Component } from "react";
import "./homepage.styles.scss";
import "./homepage";
import Footer from "../../layouts/footer/footer.component";
import Navbar from "../../layouts/navbar/navbar.component";

import SectionOne from "../../components/section-one/section-one.component";
import SectionTwo from "../../components/section-two/section-two.component";
import SectionThree from "../../components/section-three/section-three.component";
import SectionFour from "../../components/section-four/section-four.component";
import SectionFive from "../../components/section-five/section-five.component";
import SectionSix from "../../components/section-six/section-six.component";
import SectionSeven from "../../components/section-seven/section-seven.component";

import { SRLWrapper } from "simple-react-lightbox";
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SRLWrapper>
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
          <SectionSeven />
        </SRLWrapper>
        <Footer />
      </div>
    );
  }
}
