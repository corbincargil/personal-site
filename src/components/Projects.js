import React from "react";
import { StyledProjects } from "./styles/Projects.styled";
import { Parallax } from "react-scroll-parallax";
import FeaturedProjects from "./FeaturedProjects";

export default function Projects() {
  return (
    <StyledProjects>
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[0, 80]}
        translateY={[0, 0]}
        startScroll={300}
        // endScroll={700}
      >
        <h1 id="projects-title">Projects</h1>
      </Parallax>
      <div id="project-content">
        <h2>Featured Projects</h2>
        <FeaturedProjects />
      </div>
      <p>
        Icons by:{" "}
        <a href="https://www.flaticon.com/free-icons/next" title="next icons">
          Next icons created by Arkinasi - Flaticon
        </a>
      </p>
    </StyledProjects>
  );
}
