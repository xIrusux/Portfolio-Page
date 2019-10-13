import React from "react";
import { NavBar } from "../mutual/navbar/NavBar";
import { SideBar } from "../mutual/sidebar/SideBar";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-page">
      <NavBar />
      <SideBar />
      <h2>Contact Me</h2>
      <hr className="line" />
      <section className="contact-box">
        <div className="contact-details">
          <p>github: https://github.com/xIrusux</p>
          <p>email: christine.altmann@gmx.com</p>
          <p>phone: +447727161154</p>
          <p>based in London</p>
        </div>
      </section>
      <Link to={{ pathname: "/skills" }} className="arrow-up-router">
        <img
          className="arrow--up"
          src={require("../../assets/arrow.svg")}
          alt="upwards arrow to move to project page"
        ></img>
        <p className="next-text">got to Skills</p>
      </Link>
    </section>
  );
};

export { ContactPage };
