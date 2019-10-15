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
      <div className="table-responsive">
        <p className="mobile-only">
          Responsive version coming soon!<br></br>Scroll to see my skills
        </p>
        <table class="cv-table cv-item">
          <tbody>
            <tr>
              <th>Languages</th>
              <th>Frontend</th>
              <th>Backend</th>
              <th>Databases</th>
              <th>Testing</th>
              <th>Design</th>
              <th>Tooling</th>
            </tr>
            <tr>
              <td>Javascript (ES6/ES7)</td>
              <td>React</td>
              <td>Node.js</td>
              <td>PostgreSQL</td>
              <td>Tape</td>
              <td>Figma</td>
              <td>Git &amp; Github</td>
            </tr>
            <tr>
              <td>HTML 5</td>
              <td>Styled Components</td>
              <td>Express.js</td>
              <td>Airtable</td>
              <td>Travis CI</td>
              <td>Zeplin</td>
              <td>Heroku & Netlify</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>SASS</td>
              <td>Netlify Lambda</td>
              <td></td>
              <td>Cypress</td>
              <td>Invision</td>
              <td>Agile</td>
            </tr>
            <tr>
              <td></td>
              <td>Handlebars</td>
              <td></td>
              <td></td>
              <td>Jest</td>
              <td></td>
              <td>Design Thinking</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Codecov</td>
              <td></td>
              <td>User Research</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Supertest</td>
              <td></td>
              <td>User Testing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to={{ pathname: "/contact-me" }} className="arrow-down-router">
        <img
          className="arrow--down"
          src={require("../../assets/arrow.svg")}
          alt="downards arrow to move to project page"
        ></img>
        <p className="next-text">go to Contact Form</p>
      </Link>
    </section>
  );
};

export { SkillsPage };
