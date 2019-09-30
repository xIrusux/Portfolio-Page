import React from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { MainContentLP } from "./MainContentLP";

const LandingPage = () => {
  return (
    <section className="placeholder">
      <NavBar />
      <MainContentLP />
      <SideBar />
    </section>
  );
};

export { LandingPage };
