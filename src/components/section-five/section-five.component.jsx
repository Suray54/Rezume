import React from "react";
import anup from "./../../assets/anup.jpg";
import sushil from "./../../assets/sushil.jpg";

import "./section-five.styles.scss";

export default function SectionFive() {
  return (
    <section className="section5" id="section-about">
      <h2 data-aos={"fade-left"}>
        others <span>Testimonial</span>
      </h2>
      <div className="row" data-aos={"fade-right"}>
        <div className="col-md-6 testimonial">
          <img src={anup} alt="Anup Maharjan" className="testimonial__img" />
          <div className="testimonial__details">
            <p>
              &ldquo;I have worked with Suranjan Rai and known him for more than
              5 years. Rai understands the needs of a startup - he's reliable,
              flexible and consistently delivers a valuable service. He's a
              smart guy who loves to problem solve with fresh ideas. As a bonus,
              he's absolute pleasure to work with.&rdquo;
            </p>
            <cite>&mdash; Anup Maharjan</cite>
          </div>
        </div>
        <div className="col-md-6 testimonial">
          <img
            src={sushil}
            alt="Sushil Shrestha"
            className="testimonial__img"
          />
          <div className="testimonial__details">
            <p>
              &ldquo;It is very crucial for a person to have good communication
              skills in order to work in a group. We were able to work
              coherently and made the project a huge success. Being a technology
              enthusiast he is up-to-date with new technology and provides wide
              range of services. I was glad I chose right person to work
              with.&rdquo;
            </p>
            <cite>&mdash; Sushil Shrestha</cite>
          </div>
        </div>
      </div>
    </section>
  );
}
