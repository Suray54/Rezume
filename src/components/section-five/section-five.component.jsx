import React from "react";
import anup from "./../../assets/anup.jpg";
import sushil from "./../../assets/sushil.jpg";

import "./section-five.styles.scss";

export default function SectionFive() {
  return (
    <section className="section5" id="section-about">
      <h2>
        Client <span>Testimonial</span>
      </h2>
      <div className="row">
        <div className="col-md-6 testimonial">
          <img src={anup} alt="UIUX" className="testimonial__img" />
          <div className="testimonial__details">
            <p>
              &ldquo;Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.&rdquo;
            </p>
            <cite>&mdash; Anup Maharjan</cite>
          </div>
        </div>
        <div className="col-md-6 testimonial">
          <img src={sushil} alt="UIUX" className="testimonial__img" />
          <div className="testimonial__details">
            <p>
              &ldquo;Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean.&rdquo;
            </p>
            <cite>&mdash; Sushil Shrestha</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
