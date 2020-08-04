import React, { Component } from "react";
import "./section-three.styles.scss";
export default class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          id: 1,
          date: "2016 - 2019",
          title: "Bachelors in information Teachnology",
          detail:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          main: "Wolverhampton University",
        },

        {
          id: 2,
          date: "2016 - 2019",
          title: "Bachelors in information Teachnology",
          detail:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          main: "Wolverhampton University",
        },
        {
          id: 3,
          date: "2016 - 2019",
          title: "Bachelors in information Teachnology",
          detail:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          main: "Wolverhampton University",
        },
      ],
      experiences: [
        {
          id: 1,
          date: "2016 - 2019",
          title: "Bachelors in information Teachnology",
          detail:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          main: "Wolverhampton University",
        },

        {
          id: 2,
          date: "2016 - 2019",
          title: "Bachelors in information Teachnology",
          detail:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          main: "Wolverhampton University",
        },
        {
          id: 3,
          date: "2016 - 2019",
          title: "Bachelors in information Teachnology",
          detail:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
          main: "Wolverhampton University",
        },
      ],
    };
  }
  render() {
    const { educations } = this.state;
    const { experiences } = this.state;

    return (
      <section className="section3" id="section-resume">
        <h2>
          My <span>Resume</span>
        </h2>
        <div className="row">
          <div className="col-md-6 education">
            <h2>Education</h2>
            {educations.map((education) => (
              <div className="education-item" key={education.id}>
                <span>
                  <i class="fas fa-calendar-week"></i> {education.date}
                </span>
                <h3>{education.title}</h3>
                <p>{education.detail}</p>
                <p>{education.main}</p>
              </div>
            ))}
          </div>

          <div className="col-md-6 experience">
            <h2>Experience</h2>
            {experiences.map((experience) => (
              <div className="experience-item" key={experience.id}>
                <span>
                  <i class="fas fa-calendar-week"></i> {experience.date}
                </span>
                <h3>{experience.title}</h3>
                <p>{experience.detail}</p>
                <p>{experience.main}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
