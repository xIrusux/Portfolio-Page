import React from "react";
import "./css/MainContentLP.css";
import { Link } from "react-router-dom";

const MainContentLP = () => {
  return (
    <>
      <section className="main-content">
        <img
          className="main-content__imageellipse"
          src={require("../../assets/ChristineJapan.png")}
          alt="Christine Altmann in the streets of tokio"
        />
        <p className="description">
          Hey, My name is Christine Altmann and I am a full-stack web-developer.
          My passion is to create and to write smart code.
        </p>
        <p className="call-me">You can also call me</p>
        <p className="changemaker">changemaker</p>
      </section>
      <Link to={{ pathname: "/projects" }}>
        <img
          className="arrow--down"
          src={require("../../assets/arrow.svg")}
          alt="dowwards arrow to move to project page"
          Link
          to={{ pathname: "/projects" }}
        ></img>
      </Link>
    </>
  );
};

export { MainContentLP };
