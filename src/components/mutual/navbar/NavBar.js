import React from "react";
import "./NavBar.css";
import "../../landingpage/css/LandingPage.css";

const NavBar = () => {
  return (
    <>
      <section className="navbar">
        <i></i>
        <i></i>
        <i></i>
      </section>
      <section className="contact">
        <img
          className="contact-icon"
          src={require("../../../assets/contact.svg")}
        />
      </section>
    </>
  );
};

export { NavBar };
