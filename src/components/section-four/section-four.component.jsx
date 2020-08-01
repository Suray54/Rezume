import React from "react";
import html from "./../../assets/html.jpg";
import Resume from "./../../assets/Resume.pdf";
import "./section-four.styles.scss";

export default function SectionFour() {
  return (
    <section className="section4" id="section-about">
      <div className="row about">
        <div className="col-md-7 about__img">
          <img src={html} class="img-responsive" alt="html" />
        </div>
        <div className="col-md-5 about__details">
          <h2>
            About <span>Me</span>
          </h2>

          <h5>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </h5>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
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
