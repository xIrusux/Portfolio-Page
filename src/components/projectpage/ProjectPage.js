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
        ></img>
        <p className="next-text">go to Home</p>
      </Link>
      <NavBar />
      <section className="project-page">
        <h2 className="projects">Projects</h2>
        <hr className="line" />
        <div className="project-grid">
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/placeholder-image.png")}
              alt="story"
            ></img>
            <h1>Generation Change</h1>
            <p>
              React | Netlify Lambda | SASS | Cypress | Jest | Airtable | API's
            </p>
            <div className="overlay">
              <div className="text">
                Web app that connecting educators to local social action
                projects for young people
              </div>
              <p>Role: Dev Ops - exploring and deploying infrastructure</p>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/placeholder-image.png")}
              alt="story"
            ></img>
            <h1>Plantbase-Me</h1>
            <p className="tech-stack">
              Node | Express | Handlebars | Tape | PostgreSQL | CSS | Supertest
              | 3D Animations
            </p>
            <div className="overlay">
              <div className="text">
                Crowd sourced review app for plan-based products{" "}
              </div>
              <p>Role: QA - ensuring code quality and test coverage</p>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/placeholder-image.png")}
              alt="story"
            ></img>
            <h1>Project title</h1>
            <p className="tech-stack">category</p>
            <div className="overlay">
              <div className="text">
                Project Details: following tech was used
              </div>
            </div>
          </article>
        </div>
        <div className="projects__container"></div>
        <h2 className="more-coming-soon">More coming soon ...</h2>
      </section>
      <Link to={{ pathname: "/skills" }} className="arrow-down-router">
        <img
          className="arrow--down"
          src={require("../../assets/arrow.svg")}
          alt="dowwards arrow to move to project page"
        ></img>
        <p className="next-text">go to Skills</p>
      </Link>
    </>
  );
};

export { ProjectPage };
