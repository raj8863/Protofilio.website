import React from "react";
import "./module.Contact.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-title">Let&apos;s Work Together</h2>

      <p className="contact-desc">
        I&apos;m always interested in new opportunities and exciting projects.
        Let&apos;s discuss how we can bring your ideas to life!
      </p>

      <div className="contact-cards">
        {/* Email */}
        <div className="contact-card">
          <MdEmail className="icon email" />
          <h4>Email</h4>
          <p>singhraj0439@gmail.com</p>
        </div>

        {/* Location */}
        <div className="contact-card">
          <FaMapMarkerAlt className="icon location" />
          <h4>Location</h4>
          <p>Available with in India</p>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <FaGithub className="icon github" />
          <h4>GitHub</h4>
          <p>raj8863</p>
        </div>
      </div>

      <a
        href="mailto:sinhgraj0439@gmail.com"
        className="contact-btn"
      >
        <MdEmail /> Get In Touch
      </a>
    </section>
  );
};

export default Contact;
