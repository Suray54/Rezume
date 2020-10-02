import React from "react";
import "./section-seven.styles.scss";
import ContactForm from "../contact-form/contact-form.component";

export default function SectionSeven() {
  return (
    <section className="section7" id="section-contact">
      <h2 data-aos={"fade-right"}>
        Contact <span>Me</span>
      </h2>
      <div className="row contact" data-aos={"fade-left"}>
        <div className="col-md-7 ">
          <h2>Get In Touch</h2>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
        <div className="col-md-5">
          <h2>My Contact Details</h2>
          <div className="contact__details">
            <ul>
              <li>
                <h3>Email</h3>
                <p>Suranjanthulungrai@gmail.com</p>
              </li>

              <li>
                <h3>Phone</h3>
                <p>+977 9860124286</p>
              </li>

              <li>
                <h3>Address</h3>
                <p>Lubhoo, Lalitpur</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
