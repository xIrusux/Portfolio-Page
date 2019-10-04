import React from "react";
import "./css/LandingPage.css";
import { NavBar } from "../mutual/navbar/NavBar";
import { SideBar } from "../mutual/sidebar/SideBar";
import { MainContentLP } from "./MainContentLP";

const LandingPage = ({ arrowdown, clickedArrowdown }) => {
  return (
    <section className="landing-page">
      <NavBar />
      <MainContentLP
        arrowdown={arrowdown}
        clickedArrowdown={clickedArrowdown}
      />
      <SideBar />
    </section>
  );
};

export { LandingPage };
