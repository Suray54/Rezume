import React from "react";
import UXUI from "./../../assets/UXUI.png";
import html from "./../../assets/html.jpg";
import graphic from "./../../assets/graphic.png";
import "./section-six.styles.scss";

export default function SectionSix() {
  return (
    <section className="section6" id="section-services">
      <h2>
        My <span>Services</span>
      </h2>
      <div className="row">
        <div className="col-md-4 ">
          <div className="service">
            <img src={html} alt="UIUX" className="service__img" />
            <h3>Web Development</h3>
            <p>
              Web development is the work involved in developing a website for
              the Internet. Web development can range from developing a simple
              single static page of plain text to complex web-based internet
              applications and social network services.
            </p>
            <div className="button">
              <a href="#section-portfolio" class="site-link">
                Learn More <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="service">
            <img src={graphic} alt="UIUX" className="service__img" />
            <h3>Graphic Design</h3>
            <p>
              Graphic design is the process of visual communication and
              problem-solving through the use of typography, photography,
              iconography and illustration.
            </p>
            <div className="button">
              <a href="#section-portfolio" class="site-link">
                Learn More <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="service">
            <img src={UXUI} alt="UIUX" className="service__img" />
            <h3>UI / UX</h3>
            <p>
              The user interface and user experience design offers practical,
              skill-based instruction centered around a visual communications
              perspective, rather than on one focused on marketing or
              programming alone.
            </p>
            <div className="button">
              <a href="#section-portfolio" class="site-link">
                Learn More <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
