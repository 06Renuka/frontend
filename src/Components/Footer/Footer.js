import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#87aed8", color: "black", padding: "40px 0",borderRadius:'5px' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4" style={{ marginBottom: "20px" }}>
            <img
              src={logo}
              alt="Osumare"
              className="footer-logo"
              style={{ width: "100px", marginBottom: "20px" }}
            />
            <address style={{ lineHeight: "1.5" }}>
              <p>
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharashtra, India.
              </p>
            </address>
            <div>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@osumare.in"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  hello@osumare.in
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+918459876226"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  +91 8459 8762 26
                </a>
              </p>
            </div>
          </div>

          <div className="col-md-4" style={{ marginBottom: "20px" }}>
            <h5>Menu</h5>
            <ul
              className="footer-menu"
              style={{ listStyle: "none", padding: 0 }}
            >
              {[
                "Home",
                "About",
                "Services",
                "Work",
                "Blog",
                "Career",
                "Contacts",
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    style={{ color: "Black", textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social</h5>
            <div
              className="footer-social"
              style={{ display: "flex", gap: "10px" }}
            >
              <a
                href="https://www.facebook.com"
                className="social-icon"
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.twitter.com"
                className="social-icon"
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="social-icon"
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "24px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
