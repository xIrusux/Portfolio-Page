import React from "react";
import "./css/ProjectPage.css";
import { NavBar } from "../mutual/navbar/NavBar";

const ProjectPage = () => {
  return (
    <>
      <NavBar />
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
            <div className="overlay">
              <div className="text">
                Project Details: following tech was used
              </div>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/placeholder-image.png")}
              alt="story"
            ></img>
            <h1>Project title</h1>
            <p>category</p>
            <div className="overlay">
              <div className="text">
                Project Details: following tech was used
              </div>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/placeholder-image.png")}
              alt="story"
            ></img>
            <h1>Project title</h1>
            <p>category</p>
            <div className="overlay">
              <div className="text">
                Project Details: following tech was used
              </div>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/placeholder-image.png")}
              alt="story"
            ></img>
            <h1>Project title</h1>
            <p>category</p>
            <div className="overlay">
              <div className="text">
                Project Details: following tech was used
              </div>
            </div>
          </article>
        </div>
        <div className="projects__container"></div>
      </section>
    </>
  );
};

export { ProjectPage };
