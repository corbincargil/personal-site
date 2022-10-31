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
    <StyledProjects>
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[0, 900]}
        translateY={[0, 0]}
        startScroll={300}
        // endScroll={700}
        style={{ width: "100px" }}
      >
        <h1 id="projects-title">Projects</h1>
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
        <strong>
          <h2>Featured</h2>
        </strong>
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
