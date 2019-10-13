import React from "react";
import "./SkillsPage";
// import { LandingPage } from "../../landingpage/css/LandingPage.css";
import { NavBar } from "../mutual/navbar/NavBar";
import { SideBar } from "../mutual/sidebar/SideBar";
import { Link } from "react-router-dom";
import "./SkillsPage.css";

const SkillsPage = ({ arrowdown, clickedArrowdown }) => {
  return (
    <section className="skills-page">
      <NavBar />
      <SideBar />
      <h2>Skills</h2>
      <hr className="line" />
      <Link to={{ pathname: "/projects" }} className="arrow-up-router">
        <img
          className="arrow--up"
          src={require("../../assets/arrow.svg")}
          alt="upwards arrow to move to project page"
        ></img>
        <p className="next-text">go to Projects</p>
      </Link>

      <table class="cv-table cv-item">
        <tbody>
          <tr>
            <th>Languages</th>
            <th>Frameworks / Libraries</th>
            <th>Databases</th>
            <th>Testing</th>
            <th>Design</th>
            <th>Other tools</th>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>Node.js</td>
            <td>PostgreSQL</td>
            <td>Tape</td>
            <td>Figma</td>
            <td>Git &amp; Github</td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>Express.js</td>
            <td></td>
            <td>Shot</td>
            <td>Invision</td>
            <td>Heroku</td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>React</td>
            <td></td>
            <td>Travis CI</td>
            <td>Photoshop</td>
            <td>Agile</td>
          </tr>
          <tr>
            <td>Java (Processing)</td>
            <td>Redux</td>
            <td></td>
            <td>Istanbul</td>
            <td>Illustrator</td>
            <td>Design Thinking</td>
          </tr>
          <tr>
            <td>C++ (Open&dash;Frameworks)</td>
            <td>Handlebars</td>
            <td></td>
            <td>Codecov</td>
            <td></td>
            <td>User Research</td>
          </tr>
          <tr>
            <td></td>
            <td>p5.js</td>
            <td></td>
            <td>Supertest</td>
            <td></td>
            <td>User Testing</td>
          </tr>
        </tbody>
      </table>

      <Link to={{ pathname: "/contact-me" }} className="arrow-down-router">
        <img
          className="arrow--down"
          src={require("../../assets/arrow.svg")}
          alt="dowwards arrow to move to project page"
        ></img>
        <p className="next-text">go to Contact Form</p>
      </Link>
    </section>
  );
};

export { SkillsPage };
