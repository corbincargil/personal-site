import React from "react";

export default function SkillIcon(props) {
  const skill = props.skill;

  return (
    <li className={`skill ${skill.category}`}>
      <img src={skill.icon} alt={`${skill.name} icon`} />
      <span>{skill.name}</span>
    </li>
  );
}
