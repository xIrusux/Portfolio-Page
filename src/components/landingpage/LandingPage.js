import React from "react";
import "./css/LandingPage.css";
import { NavBar } from "../mutual/navbar/NavBar";
import { SideBar } from "../mutual/sidebar/SideBar";
import { MainContentLP } from "./MainContentLP";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <NavBar />
      <MainContentLP />
      <SideBar />
    </section>
  );
};

export { LandingPage };
