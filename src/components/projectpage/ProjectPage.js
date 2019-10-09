import React from "react";
import "./css/ProjectPage.css";

const ProjectPage = () => {
  return (
    <section className="project-page">
      <h2>Projects</h2>
      <hr className="line" />
      <div className="project-grid">
        <article className="project-item">
          <img
            className="project-image"
            src={require("../../assets/placeholder-image.png")}
            alt="story"
          ></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
        <article className="project-item">
          <img
            className="project-image"
            src={require("../../assets/placeholder-image.png")}
            alt="story"
          ></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
        <article className="project-item">
          <img
            className="project-image"
            src={require("../../assets/placeholder-image.png")}
            alt="story"
          ></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
        <article className="project-item">
          <img
            className="project-image"
            src={require("../../assets/placeholder-image.png")}
            alt="story"
          ></img>
          <h1>Project title</h1>
          <p>category</p>
        </article>
      </div>
      <div className="projects__container"></div>
    </section>
  );
};

export { ProjectPage };
