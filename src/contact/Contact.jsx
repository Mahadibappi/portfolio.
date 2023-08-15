/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_j1ynazo",
      "template_xfye30q",
      form.current,
      "krEIL0qhL1i54OvD5"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container container_contact">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>mahadibappe29551@gmail.com</h5>
            <a
              href="mailto:mahadibappi@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>What'sApp</h4>
            <h5>+88 01732796475</h5>
            <a
              href="https://api.whatsapp.com/send?phont+8801732796457"
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
