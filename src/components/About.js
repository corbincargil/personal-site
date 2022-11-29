import React from "react";
import { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StyledAbout } from "./styles/About.styled";
import portrait from "../images/portrait.jpg";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "framer-motion";

export default function About() {
  console.log(typeof portrait);
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true });
  return (
    <StyledAbout id="about">
      <Parallax
        className="section-title"
        id="about-title"
        easing={"easeInOutQuad"}
        translateX={[800, 0]}
        translateY={[0, 0]}
        style={{ width: "min-content" }}
      >
        <h1>About</h1>
      </Parallax>
      <div
        id="about-content"
        ref={contentRef}
        style={{
          transform: contentIsInView ? "none" : "translateY(200px)",
          opacity: contentIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <StaticImage
          src="../images/portrait.jpg"
          alt="Picture of me"
          placeholder="blurred"
          aspectRatio={1.25}
        />
        <p>
          Hi, I'm Corbin. I am a self-taught software developer based out of
          South Texas with a{" "}
          <a href="https://econbus.mines.edu/engineering-technology-management/">
            M.S.
          </a>{" "}
          &{" "}
          <a href="https://www.mines.edu/academics/mechanical-engineering-degree/">
            B.S.
          </a>{" "}
          from Colorado School of Mines. I love working with React and other
          front-end libraries, and am currently cultivating a deeper
          appreciation for server-side programming as I learn Node and Express.
          When I'm not at my computer, I am usually spending time with family or
          friends. Some of my hobbies include reading, working out, or watching
          chess tutorials on Youtube.
        </p>
        {/* <p>
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
        </p> */}
        {/* <p>
          Old github bio: Hi, I'm Corbin and I am a mechanical engineering
          graduate turned software engineer. I use Github to track my learning
          process. Please have a look around!
        </p> */}
      </div>
    </StyledAbout>
  );
}
