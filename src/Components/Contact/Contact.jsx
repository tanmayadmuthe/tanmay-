import React, { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.location.href = `mailto:tanmayadmuthe32@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="section-title">GET IN TOUCH</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to say hi?
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn primary submit-btn">
            Send Message <FaPaperPlane />
          </button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>tanmayadmuthe32@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9940625068</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Coimbatore, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
