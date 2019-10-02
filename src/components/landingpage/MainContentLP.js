import React from "react";
import "./css/MainContentLP.css";

const MainContentLP = () => {
  return (
    <section className="main-content">
      <img
        className="main-content__imageellipse"
        src={require("../../assets/ChristineJapan.png")}
        alt="picture of Christine Altmann in the streets of tokio"
      />
      <p className="description">
        Hey, My name is Christine Altmann and I am a full-stack web-developer.
        My passion is to create and to write smart code.
      </p>
      <p className="call-me">You can also call me</p>
      <p className="changemaker">changemaker</p>
      <img
        className="arrow--down"
        src={require("../../assets/arrow.svg")}
        alt="dowwards arrow to move to project page"
      />
    </section>
  );
};

export { MainContentLP };
