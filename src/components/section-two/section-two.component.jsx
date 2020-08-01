import React from "react";
import "./section-two.styles.scss";
import html from "./../../assets/html.jpg";
import ps from "./../../assets/ps.jpg";
import UXUI from "./../../assets/UXUI.png";
export default function SectionTwo() {
  return (
    <section className="section2" id="section-portfolio">
      <h2>
        Featured <span>Portfolio</span>
      </h2>

      <div className="tags">
        <button class="btn btn-default filter-button" data-filter="all">
          All
        </button>
        <button class="btn btn-default filter-button" data-filter="website">
          Websites
        </button>
        <button class="btn btn-default filter-button" data-filter="graphic">
          Graphic Design
        </button>
        <button class="btn btn-default filter-button" data-filter="ui">
          UI / UX
        </button>
      </div>
      <div className="row">
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter website">
          <img src={html} class="img-responsive" alt="html" />
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter graphic">
          <img src={ps} alt="graphic" />
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui">
          <img src={UXUI} alt="UIUX" />
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter website">
          <img src={html} class="img-responsive" alt="html" />
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter graphic">
          <img src={ps} alt="graphic" />
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui">
          <img src={UXUI} alt="UIUX" />
        </div>
      </div>
    </section>
  );
}
