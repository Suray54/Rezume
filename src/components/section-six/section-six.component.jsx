import React from "react";
import UXUI from "./../../assets/UXUI.png";
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
            <img src={UXUI} alt="UIUX" className="service__img" />
            <h3>Web Development</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
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
            <h3>Graphic Design</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
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
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
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
