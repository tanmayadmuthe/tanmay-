import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="card">
            <h3>Get in touch</h3>
            <p>
              Prefer email? Drop a line at{" "}
              <strong>youremail@example.com</strong>
            </p>
            <p>Or connect via social links on my profile.</p>
          </div>

          <form
            className="contact-form card"
            onSubmit={(e) => e.preventDefault()}
          >
            <label>
              <span
                style={{
                  display: "block",
                  marginBottom: 6,
                  color: "var(--muted)",
                }}
              >
                Name
              </span>
              <input placeholder="Your name" />
            </label>

            <label>
              <span
                style={{
                  display: "block",
                  marginTop: 10,
                  marginBottom: 6,
                  color: "var(--muted)",
                }}
              >
                Email
              </span>
              <input placeholder="your@email.com" />
            </label>

            <label>
              <span
                style={{
                  display: "block",
                  marginTop: 10,
                  marginBottom: 6,
                  color: "var(--muted)",
                }}
              >
                Message
              </span>
              <textarea rows="5" placeholder="Say hi..." />
            </label>

            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: 12 }}
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
