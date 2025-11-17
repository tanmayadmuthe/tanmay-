import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <small>
          © {new Date().getFullYear()} Tanmay — Built with React &amp; CSS
        </small>
      </div>
    </footer>
  );
}
