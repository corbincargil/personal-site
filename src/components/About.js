import React from "react";
import { useRef } from "react";
import { StyledAbout } from "./styles/About.styled";
import portrait from "../images/portrait.jpg";
import { Parallax } from "react-scroll-parallax";
import { useScroll, useInView } from "framer-motion";

export default function About() {
  const { scrollYProgess } = useScroll();
  const titleRef = useRef(null);
  const titleIsInView = useInView(titleRef, { once: true });
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true });
  return (
    <StyledAbout>
      <Parallax
        easing={"easeInOutQuad"}
        translateX={[0, 900]}
        translateY={[0, 0]}
        startScroll={300}
        // endScroll={700}
        style={{ width: "100px" }}
      >
        <h1 className="section-title" id="about-title">
          About
        </h1>
      </Parallax>
      {/* <h1
        id="about-title"
        ref={titleRef}
        style={{
          transform: titleIsInView ? "none" : "translateX(200px)",
          opacity: titleIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        About
      </h1> */}

      <div
        id="about-content"
        ref={contentRef}
        style={{
          transform: contentIsInView ? "none" : "translateY(200px)",
          opacity: contentIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <img src={portrait} alt="Portrait" />
        <p>
          Hi, I’m Corbin. I am a self-taught software developer born & raised in
          south Texas and based in San Antonio. After majoring in mechanical
          engineering at Colorado School of Mines, I began building my
          programming skills as a hobby by taking online classes and working on
          the occasional project while working full time. This soon led me to
          realize my passion for using problem solving and *technology* to
          develop software solutions for those around me. I love learning,
          building, and getting creative, all of which I use sofware development
          as an outlet for. When I’m not at my computer, I enjoy working out,
          spending time with family & friends, and reading. I also really enjoy
          watching movies/TV, but try to not spend too much time inside if I can
          help it.
        </p>
      </div>
    </StyledAbout>
  );
}
