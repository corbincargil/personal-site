import React from "react";
import { StyledSkills } from "./styles/Skills.styled";
import { Parallax } from "react-scroll-parallax";
import SkillIcon from "./SkillIcon";

//skill icons
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
import styledComponentsIcon from "../images/skill-icons/styled-components-icon.png";
import expressIcon from "../images/skill-icons/icons8-express-js-48.png";
import mongoDBIcon from "../images/skill-icons/icons8-mongodb-48.png";
import graphQLIcon from "../images/skill-icons/graphql-48.png";
import nextIcon from "../images/skill-icons/icons8-next.js-48.png";
import tsIcon from "../images/skill-icons/icons8-typescript-48.png";
import testingLibraryIcon from "../images/skill-icons/octopus-128x128.png";
import dockerIcon from "../images/skill-icons/icons8-docker-48.png";
import prismaIcon from "../images/skill-icons/icons8-prisma-orm-48.png";

export default function Skills() {
  function isFrontEnd(skill) {
    return skill.category === "front-end";
  }
  function isBackEnd(skill) {
    return skill.category === "back-end";
  }
  function isOther(skill) {
    return skill.category === "other";
  }
  function isIndustryTool(skill) {
    return skill.category === "industry-tools";
  }
  function isCurrentLearning(skill) {
    return skill.category === "current-learning";
  }
  return (
    <StyledSkills id="skills">
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[800, 0]}
        translateY={[0, 0]}
        style={{ width: "min-content" }}
      >
        <h1 className="section-title" id="skills-title">
          Skills
        </h1>
      </Parallax>
      <div id="skills-container">
        <div className="learned">
          <div className="skill-list" id="front-end">
            <h2>Front End</h2>
            <ul>
              {skills.filter(isFrontEnd).map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </ul>
          </div>
          <div className="skill-list" id="back-end">
            <h2>Back End</h2>
            <ul>
              {skills.filter(isBackEnd).map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </ul>
          </div>
          <div className="skill-list" id="industry-tools">
            <h2>Industry Tools</h2>
            <ul>
              {skills.filter(isIndustryTool).map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </ul>
          </div>
          <div className="skill-list" id="other">
            <h2>Other</h2>
            <ul>
              {skills.filter(isOther).map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </ul>
          </div>
        </div>
        <div className="learning">
          <div className="skill-list" id="current-learning">
            <h2>Current Learning</h2>
            <ul id="current-learning-list">
              {skills.filter(isCurrentLearning).map((skill) => {
                return <SkillIcon key={skill.id} skill={skill} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </StyledSkills>
  );
}

let skills = [
  {
    name: "Typescript",
    icon: tsIcon,
    category: "industry-tools",
    id: 18,
  },
  {
    name: "Next.js",
    icon: nextIcon,
    category: "industry-tools",
    id: 17,
  },
  {
    name: "React Testing Library",
    icon: testingLibraryIcon,
    category: "current-learning",
    id: 19,
  },
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
    name: "Gatsby",
    icon: gatsbyIcon,
    category: "industry-tools",
    id: 6,
  },
  {
    name: "Git/Github/Gitlab",
    icon: gitIcon,
    category: "industry-tools",
    id: 7,
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    category: "back-end",
    id: 13,
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
    category: "other",
    id: 11,
  },
  {
    name: "Styled Components",
    icon: styledComponentsIcon,
    category: "front-end",
    id: 12,
  },
  {
    name: "NPM",
    icon: npmIcon,
    category: "other",
    id: 8,
  },
  {
    name: "Express",
    icon: expressIcon,
    category: "none",
    id: 14,
  },
  {
    name: "Mongo DB",
    icon: mongoDBIcon,
    category: "back-end",
    id: 15,
  },
  {
    name: "GraphQL",
    icon: graphQLIcon,
    category: "other",
    id: 16,
  },
  {
    name: "Docker",
    icon: dockerIcon,
    category: "industry-tools",
    id: 23,
  },
  {
    name: "Prisma",
    icon: prismaIcon,
    category: "back-end",
    id: 23,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    category: "back-end",
    id: 5,
  },
  // {
  //   name: "",
  //   icon: ,
  //   category: "",
  //   id: 20,
  // },
  // {
  //   name: "",
  //   icon: ,
  //   category: "",
  //   id: 21,
  // },
  // {
  //   name: "",
  //   icon: ,
  //   category: "",
  //   id: 22,
  // },
];
