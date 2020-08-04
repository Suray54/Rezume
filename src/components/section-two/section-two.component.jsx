import React from "react";
import "./section-two.styles.scss";
import bagging from "./../../assets/bagging.JPG";
import EDUN from "./../../assets/EDUN.JPG";
import solutions from "./../../assets/solutions.JPG";
import projectone from "./../../assets/projectone.JPG";
import portfolio from "./../../assets/portfolio.JPG";

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
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui">
          <a href="https://suray54.github.io/Bagging/">
            <img src={bagging} class="img-responsive" alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui">
          <a href="https://suray54.github.io/Project-2/">
            <img src={solutions} class="img-responsive" alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter website">
          <a href="https://suray54.github.io/Project-1/">
            <img src={projectone} class="img-responsive" alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter website">
          <a href="https://suray54.github.io/EDUN/">
            <img src={EDUN} class="img-responsive" alt="html" />
          </a>
        </div>

        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui website">
          <a href="https://suray54.github.io/Rezume/">
            <img src={portfolio} alt="UIUX" />
          </a>
        </div>
      </div>
    </section>
  );
}
