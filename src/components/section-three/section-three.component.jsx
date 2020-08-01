import React from "react";
import "./section-three.styles.scss";

export default function SectionThree() {
  return (
    <section className="section3" id="section-resume">
      <h2>
        My <span>Resume</span>
      </h2>
      <div className="row">
        <div className="col-md-6 education">
          <h2>Education</h2>
          <div className="education-item">
            <span>
              <i class="fas fa-calendar-week"></i> 2017 - 2019
            </span>
            <h3>Bachelors in information Teachnology</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <p>Wolverhampton University</p>
          </div>
        </div>

        <div className="col-md-6 experience">
          <h2>Experience</h2>
          <div className="education-item">
            <span>
              <i class="fas fa-calendar-week"></i> 2019 - present
            </span>
            <h3>Web designer and developer</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
            <p>Self Learner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
