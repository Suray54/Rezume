import React from "react";
import "./section-two.styles.scss";
import "./section-two";
import bagging from "./../../assets/bagging.JPG";
import EDUN from "./../../assets/EDUN.JPG";
import solutions from "./../../assets/solutions.JPG";
import projectone from "./../../assets/projectone.JPG";
import portfolio from "./../../assets/portfolio.JPG";
import blog from "./../../assets/blog.JPG";
import todo from "./../../assets/todo.JPG";
import gallery from "./../../assets/gallery.JPG";

export default function SectionTwo() {
  return (
    <section className="section2" id="section-portfolio">
      <h2 data-aos={"fade-left"}>
        Featured <span>Portfolio</span>
      </h2>

      <div className="tags" data-aos={"fade-left"}>
        <button className="btn btn-default filter-button" data-filter="all">
          All
        </button>
        <button className="btn btn-default filter-button" data-filter="website">
          Websites
        </button>
        <button className="btn btn-default filter-button" data-filter="graphic">
          Graphic Design
        </button>
        <button className="btn btn-default filter-button" data-filter="ui">
          UI / UX
        </button>
      </div>
      <div className="row" data-aos={"fade-right"}>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui website">
          <a href="https://suray54.github.io/Rezume/">
            <img src={portfolio} alt="UIUX" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter website">
          <a href="http://edunep.org/">
            <img src={EDUN} alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui website">
          <a href="https://suray54.github.io/todo/">
            <img src={todo} alt="UIUX" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui website">
          <a href="https://suray54.github.io/gallery/">
            <img src={gallery} alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui">
          <a href="https://suray54.github.io/Bagging/">
            <img src={bagging} alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui">
          <a href="https://suray54.github.io/Project-2/">
            <img src={solutions} alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter website">
          <a href="https://suray54.github.io/Project-1/">
            <img src={projectone} alt="html" />
          </a>
        </div>
        <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter ui website">
          <a href="https://suray54.github.io/blog/">
            <img src={blog} alt="UIUX" />
          </a>
        </div>
      </div>
    </section>
  );
}
