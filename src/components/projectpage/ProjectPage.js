import React from "react";
import "./css/ProjectPage.css";

const ProjectPage = () => {
  return (
    <section className="project-page">
      <h2>Projects</h2>
      <hr className="line" />
      <ul className="project-grid">
        <li className="project-item">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </li>
        <li className="project-item">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </li>
        <li className="project-item">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </li>
        <li className="project-item">
          <img src="./logo.png" alt="story"></img>
          <h1>Project title</h1>
          <p>category</p>
        </li>
      </ul>
      <div className="projects__container"></div>
    </section>
  );
};

export { ProjectPage };
