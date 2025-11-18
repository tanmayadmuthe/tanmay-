import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, Formspree)
    alert("Message sent! (This is a demo)");
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
        {/* --- Left Side: Contact Form --- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn primary submit-btn">
            Send Message <FaPaperPlane />
          </button>
        </form>

        {/* --- Right Side: Info --- */}
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
