import React from "react";
import { StyledProjects } from "./styles/Projects.styled";
import { Parallax } from "react-scroll-parallax";

export default function Projects() {
  return (
    <StyledProjects>
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[0, 50]}
        translateY={[0, 0]}
        startScroll={100}
        endScroll={700}
      >
        <h1 id="projects-title">Projects</h1>
      </Parallax>
      <div id="project-content">
        <h2>Featured Projects</h2>
        {/* <FeaturedProjects /> */}
      </div>
    </StyledProjects>
  );
}
