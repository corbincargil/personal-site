import React from "react";
import { StyledSkills } from "./styles/Skills.styled";
import { Parallax } from "react-scroll-parallax";
import SkillIcon from "./SkillIcon";
import { skills } from "../utils/skills";

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
