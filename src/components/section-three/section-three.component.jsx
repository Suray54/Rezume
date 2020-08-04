import React, { Component } from "react";
import "./section-three.styles.scss";
export default class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          id: 1,
          date: "2018 - 2019",
          title: "Bachelors Computer Science (Bsc Hons)",
          detail:
            "I have successfully compeleted my bachelors with a first class honors degree.",
          main: "Wolverhampton University",
        },
        {
          id: 2,
          date: "2016 - 2018",
          title: "Diploma and Advanced Diploma in information technology",
          detail:
            "Successfully completed my diploma in information technology deigned and quality assured by iAcademy.",
          main: "Herald College Kathmandu",
        },

        {
          id: 3,
          date: "2015 - 2016",
          title: "Higher Secondary level (+2)",
          detail:
            "I have passed my higher secondary level education with first division.",
          main: "Omega International H S School",
        },
      ],
      experiences: [
        {
          id: 1,
          date: "2017- September",
          title: "UI-UX Training and WorkShop",
          detail:
            "I took part in the UI-UX Training and Workshop held at Herald. I learned about the user interfacing and user experience, which are the important skill for a front-end developer. I ended up winning the competetaion with my fellow teamates. ",
          main: "Herald Collage Kathmandu",
        },

        {
          id: 2,
          date: "2017- November",
          title: "Back-end development Traning and Workshop",
          detail:
            "Again held at herald, i learned about CRUD function which are required for the backend developemnt for website.",
          main: "Herald College Kathmandu",
        },
        {
          id: 3,
          date: "2019- Octuber",
          title: "Graphic Designing Training",
          detail:
            "I have successfully completed professional training on Graphic designing course from Broadway Infosys.",
          main: "Broadway Infosys",
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
                  <i class="fas fa-calendar-week"></i> &nbsp;{education.date}
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
                  <i class="fas fa-calendar-week"></i>&nbsp; {experience.date}
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
