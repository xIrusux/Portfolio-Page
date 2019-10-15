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
        <div className="project">
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/generationchange.png")}
              alt="story"
            ></img>
            <h1>
              Generation Change
              <br></br>
              <i>(in progress)</i>
            </h1>
            <p>
              React | Netlify Lambda | SASS | Cypress | Jest | Airtable | API's
            </p>
            <div className="overlay">
              <div className="text">
                <p>
                  Web app connecting educators to local social action projects
                  for young people
                </p>
                <p>
                  Role: <br></br>Dev Ops<br></br>- exploring and deploying
                  infrastructure
                </p>
                <a href="https://github.com/fac-17/Generation-Change">
                  go to github repository
                </a>
                <a href="https://generation-change.netlify.com/">
                  go to website
                </a>
              </div>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/plantbaseme.png")}
              alt="story"
            ></img>
            <h1>Plantbase-Me</h1>
            <p className="tech-stack">
              Node | Express | Handlebars | Tape | PostgreSQL | CSS | Supertest
              | 3D Animations
            </p>
            <div className="overlay">
              <div className="text">
                <p>Crowd sourced review app for plan-based products</p>
                <p>
                  Role:<br></br>QA<br></br>- ensuring code quality and test
                  coverage
                </p>
                <a href="https://github.com/fac-17/Plantbase-Me">
                  go to github repository
                </a>
                <a href="https://plantbase-me.herokuapp.com/">go to website</a>
              </div>
            </div>
          </article>
          <article className="project-item">
            <img
              className="project-image"
              src={require("../../assets/comingsoon.jpeg")}
              alt="story"
            ></img>
            <h1>XX</h1>
            <p className="tech-stack">xxxx</p>
            <div className="overlay">
              <div className="text">xxxx</div>
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
