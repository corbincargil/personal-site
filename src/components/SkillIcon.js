import React from "react";
import { motion } from "framer-motion";

export default function SkillIcon(props) {
  const skill = props.skill;

  return (
    <motion.li
      className={`skill ${skill.category}`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag
      dragConstraints={{ left: -10, right: 10, top: 10, bottom: -10 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    >
      <img src={skill.icon} alt={`${skill.name} icon`} />
      <span>{skill.name}</span>
    </motion.li>
  );
}
