import React from "react";
import "./NavBar.css";
import "../../landingpage/css/LandingPage.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // on hover change state to class hover and increase margin between items

  // add 2 additional states for transition into X

  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Info</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="https://christinealtmann.com/" target="_blank">
              <li>Show me more</li>
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
