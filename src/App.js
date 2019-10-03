import React from "react";
import "./App.css";
import { LandingPage } from "./components/landingpage/LandingPage";
import { ProjectPage } from "./components/projectpage/ProjectPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // const [page, setPage] = React.useState("landingpage");
  // const [arrowdown, clickedArrowdown] = React.useState(false);
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/projects" component={ProjectPage} />
    </Router>
  );
}

export default App;
