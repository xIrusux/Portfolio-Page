import React from "react";
import "../css/LandingPage.css";
import { NavBar } from "../../mutual/jsx/NavBar";
import { SideBar } from "../../mutual/jsx/SideBar";
import { MainContentLP } from "./MainContentLP";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <h1>PLACEHOLDER</h1>
      <NavBar />
      <MainContentLP />
      <SideBar />
    </section>
  );
};

export { LandingPage };
