import React, { Component } from "react";
import "./contact-form.styles.scss";
import { createClient } from "../../firebase/firebase.utils";
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", phone: "", message: "" };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, message } = this.state;
    try {
      createClient({ name, email, phone, message });
      this.setState({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="formMain">
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />

          <input
            name="email"
            type="text"
            placeholder="Your Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />
          <textarea
            name="message"
            value={this.state.message}
            placeholder="Write something.."
            onChange={this.handleChange}
            required
          ></textarea>

          <button className="submit-button"> Send Message</button>
        </form>
      </div>
    );
  }
}
