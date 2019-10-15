import React from "react";
import "./NavBar.css";
import "../../landingpage/css/LandingPage.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/skills">
              <li>Skills</li>
            </a>
            <a href="/projects">
              <li>Projects</li>
            </a>
            <a
              href={require("../../../assets/Christine Altmann-CV pdf")}
              download="Christine Altmann - Full-Stack Developer - CV"
            >
              <li>Download CV</li>
            </a>
          </ul>
        </div>
      </nav>
      <section className="contact">
        <Link to={{ pathname: "/contact-me" }}>
          <img
            className="contact-icon"
            src={require("../../../assets/contact.svg")}
            alt="contactme"
          />
        </Link>
      </section>
    </>
  );
};

export { NavBar };
