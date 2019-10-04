import React from "react";
import "./css/ProjectPage.css";

const ProjectPage = () => {
  return (
    <section className="project-page">
      <h2>Projects</h2>
      <ul className="project-grid">
        <li className="project-item"></li>
        <li className="project-item"></li>
        <li className="project-item"></li>
        <li className="project-item"></li>
      </ul>
      <div className="projects__container"></div>
    </section>
  );
};

export { ProjectPage };
