import React from "react";
import { useRef } from "react";
import { StyledProjects } from "./styles/Projects.styled";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";
import FeaturedProjects from "./FeaturedProjects";

export default function Projects() {
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true });

  return (
    <StyledProjects id="projects">
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[800, 0]}
        translateY={[0, 0]}
        style={{ width: "100px" }}
      >
        <h1 className="section-title" id="projects-title">
          Projects
        </h1>
      </Parallax>
      <div
        id="project-content"
        ref={contentRef}
        style={{
          transform: contentIsInView ? "none" : "translateY(200px)",
          opacity: contentIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <strong>{/* <h2>Featured</h2> */}</strong>
        <FeaturedProjects />
      </div>
      <h3>
        To view a full list of my projects, please visit my{" "}
        <u>
          <a href="https://github.com/corbincargil?tab=repositories">Github</a>
        </u>
      </h3>
    </StyledProjects>
  );
}
