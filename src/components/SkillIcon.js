import React from "react";
import { motion } from "framer-motion";

export default function SkillIcon(props) {
  const skill = props.skill;

  return (
    <motion.li
      className={`skill ${skill.category}`}
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 1.05 }}
      // drag
      // dragConstraints={{ left: -10, right: 10, top: 10, bottom: -10 }}
      // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    >
      <img
        src={skill.icon}
        alt={`${skill.name} icon`}
        draggable="false"
        loading="lazy"
      />
      <span>{skill.name}</span>
    </motion.li>
  );
}
