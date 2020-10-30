import React from "react";

import "./footer.styles.scss";

export default function Footer() {
  return (
    <section className="footer">
      <p data-aos={"fade-up"}>
        Copyright &#169; {new Date().getFullYear()} all rights reserved |
        developed by
        <a href="#section-home">Suranjan rai</a>
      </p>
      <div className="social">
        <a
          href="https://www.facebook.com/suranjan.rai.12"
          rel="nofollow"
          className="social__item"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/RaiSuranjan"
          rel="nofollow"
          className="social__item"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/suranjan-rai-991309136/"
          rel="nofollow"
          className="social__item"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
}
