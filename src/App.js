import React from "react";
import "./App.css";
import { LandingPage } from "./components/landingpage/LandingPage";
import { ProjectPage } from "./components/projectpage/ProjectPage";

function App() {
  const [page, setPage] = React.useState("landingpage");
  const [arrowdown, clickedArrowdown] = React.useState(false);
  return (
    <LandingPage arrowdown={arrowdown} clickedArrowdown={clickedArrowdown} />
  );
}

export default App;
