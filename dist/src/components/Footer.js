import React from "react";

function Footer() {
  return (
    <div className="footer">
      {/* */}
      <div className="footer-row1">
        <div className="logo-item">
          <img src={require("../assets/images/logo.svg")} alt="" />
        </div>
        <div className="social-icons">
          <img src={require("../assets/images/icon-facebook.svg")} alt="" />
          <img src={require("../assets/images/icon-twitter.svg")} alt="" />
          <img src={require("../assets/images/icon-pinterest.svg")} alt="" />
          <img src={require("../assets/images/icon-instagram.svg")} alt="" />
        </div>
        <hr size="1" width="80%" />
      </div>
      <div className="footer-row2">
        <div className="our-company">
          <span>Our Company</span>
          <ul className="our-company-links">
            <li>How we work</li>
            <li>Why Insure</li>
            <li>View Plans</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="help-me">
          <span>Help me</span>
          <ul className="help-me-links">
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className="contact">
          <span>Contact</span>
          <ul className="contact-links">
            <li>Sales</li>
            <li>Support</li>
            <li>Live Chat</li>
          </ul>
        </div>
        <div className="others">
          <span>Others</span>
          <ul className="others-links">
            <li>Careers</li>
            <li>Press</li>
            <li>Licenses</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
