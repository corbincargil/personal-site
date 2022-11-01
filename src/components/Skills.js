import React from "react";
import { StyledSkills } from "./styles/Skills.styled";
import { Parallax } from "react-scroll-parallax";

import reactIcon from "../images/skill-icons/icons8-react-native-48.png";
import htmlIcon from "../images/skill-icons/icons8-html-5-48.png";
import cssIcon from "../images/skill-icons/icons8-css3-48.png";
import jsIcon from "../images/skill-icons/icons8-javascript-48.png";
import firebaseIcon from "../images/skill-icons/icons8-google-firebase-console-48.png";
import gatsbyIcon from "../images/skill-icons/icons8-gatsbyjs-48.png";
import gitIcon from "../images/skill-icons/icons8-git-48.png";
import npmIcon from "../images/skill-icons/icons8-npm-48.png";
import webpackIcon from "../images/skill-icons/icons8-webpack-48.png";
import jestIcon from "../images/skill-icons/jest.png";
import figmaIcon from "../images/skill-icons/icons8-figma-48.png";
import nodeIcon from "../images/skill-icons/icons8-nodejs-48.png";
import SkillIcon from "./SkillIcon";

export default function Skills() {
  return (
    <StyledSkills>
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[0, 900]}
        translateY={[0, 0]}
        startScroll={300}
        // endScroll={700}
        style={{ width: "100px" }}
      >
        <h1 className="section-title" id="skills-title">
          Skills
        </h1>
      </Parallax>
      <div id="skills-container">
        <div className="learned">
          <div className="skill-list" id="front-end">
            <h2>Front End:</h2>
            <ul>
              {skills.map((skill) => {
                if (skill.category === "front-end") {
                  return <SkillIcon skill={skill} />;
                }
              })}
            </ul>
          </div>
          <div className="skill-list" id="back-end">
            <h2>Back End:</h2>
            <ul>
              {skills.map((skill) => {
                if (skill.category === "back-end") {
                  return <SkillIcon skill={skill} />;
                }
              })}
            </ul>
          </div>
          <div className="skill-list" id="design">
            <h2>Design:</h2>
            <ul>
              {skills.map((skill) => {
                if (skill.category === "design") {
                  return <SkillIcon skill={skill} />;
                }
              })}
            </ul>
          </div>
          <div className="skill-list" id="industry-tools">
            <h2>Industry Tools:</h2>
            <ul>
              {skills.map((skill) => {
                if (skill.category === "industry-tools") {
                  return <SkillIcon skill={skill} />;
                }
              })}
            </ul>
          </div>
        </div>
        <div className="learning">
          <div className="skill-list" id="current-learning">
            <h2>Current Learning:</h2>
            <ul>
              {skills.map((skill) => {
                if (skill.category === "current-learning") {
                  return <SkillIcon skill={skill} />;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </StyledSkills>
  );
}
// <p>
//   <a href="https://iconscout.com/icons/jest" target="_blank">
//     Jest Icon
//   </a>{" "}
//   by <a href="https://iconscout.com/contributors/icon-54">Icon 54</a> on{" "}
//   <a href="https://iconscout.com">IconScout</a>
// </p>

let skills = [
  {
    name: "React",
    icon: reactIcon,
    category: "front-end",
    id: 1,
  },
  {
    name: "HTML5",
    icon: htmlIcon,
    category: "front-end",
    id: 2,
  },
  {
    name: "CSS3",
    icon: cssIcon,
    category: "front-end",
    id: 3,
  },
  {
    name: "Javascript (ES6)",
    icon: jsIcon,
    category: "front-end",
    id: 4,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    category: "back-end",
    id: 5,
  },
  {
    name: "Gatsby",
    icon: gatsbyIcon,
    category: "industry-tools",
    id: 6,
  },
  {
    name: "Git/Github",
    icon: gitIcon,
    category: "industry-tools",
    id: 7,
  },
  {
    name: "NPM",
    icon: npmIcon,
    category: "industry-tools",
    id: 8,
  },
  {
    name: "Webpack",
    icon: webpackIcon,
    category: "industry-tools",
    id: 9,
  },
  {
    name: "Jest",
    icon: jestIcon,
    category: "industry-tools",
    id: 10,
  },
  {
    name: "Figma",
    icon: figmaIcon,
    category: "design",
    id: 11,
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    category: "current-learning",
    id: 12,
  },
];
