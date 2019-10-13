import React from "react";
import "./css/ProjectPage.css";
import { NavBar } from "../mutual/navbar/NavBar";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <>
      <Link to={{ pathname: "/" }} className="arrow-up-router">
        <img
          className="arrow--up"
          src={require("../../assets/arrow.svg")}
          alt="upwards arrow to move to project page"
          Link
          to={{ pathname: "/projects" }}
        ></img>
        <p className="next-text">got to Home</p>
      </Link>
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
      <Link to={{ pathname: "/skills" }} className="arrow-down-router">
        <img
          className="arrow--down"
          src={require("../../assets/arrow.svg")}
          alt="dowwards arrow to move to project page"
          Link
          to={{ pathname: "/skills" }}
        ></img>
        <p className="next-text">got to Skills</p>
      </Link>
    </>
  );
};

export { ProjectPage };
