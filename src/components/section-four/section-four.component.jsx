import React from "react";
import html from "./../../assets/html.jpg";
import Resume from "./../../assets/Resume.pdf";
import "./section-four.styles.scss";

export default function SectionFour() {
  return (
    <section className="section4" id="section-about">
      <div className="row about">
        <div className="col-lg-7 about__img" data-aos={"fade-right"}>
          <img src={html} alt="html" />
        </div>
        <div className="col-lg-5 about__details" data-aos={"fade-left"}>
          <h2>
            About <span>Me</span>
          </h2>

          <h5>
            I am a hard working person and very enthusiastic towards learning
            new things.
          </h5>
          <p>
            Web development Skills :
            <br /> - HTML, CSS (Bootstrap, SASS, Flexbox),
            <br /> - JQuery, JS, Learning React.js.
            <br />
            <br /> Graphic designing Skills:
            <br /> - Basic Illustrator, Basic Photoshop.
          </p>

          <div className="button">
            <a href="#section-contact" className="button__hire">
              Hire me
            </a>
            <a href={Resume} className="button__CV">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
