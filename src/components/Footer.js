import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="content-section">
          <h1>Quick links</h1>
        </div>
        <div className="content-section">
          <Link to="/questionnaire" className="footer-link">
            Travel-planner
          </Link>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/rooms" className="footer-link">
            Rooms
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-content">
        <div className="content-section">
          <h1>Contact Information</h1>
        </div>
        <div className="content-section">
          <p>Grandvisita@hotmail.se</p>
          <p>070-5169513</p>
        </div>
      </div>
      <div className="social-footer-content">
        <h1 className="social">Socialt</h1>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="copyright"></div>
    </div>
  );
}

export default Footer;
