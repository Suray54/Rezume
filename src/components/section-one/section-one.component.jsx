import React from "react";

import "./section-one.styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SectionOne() {
  AOS.init({
    duration: 600,
    delay: 100,
  });
  return (
    <section className="section1" id="section-home">
      <div className="details" data-aos={"fade-up"}>
        <h1>
          Hello, I'm <span>Suranjan Rai</span>
        </h1>
        <h3>and this is my resume</h3>
      </div>
    </section>
  );
}
