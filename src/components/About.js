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
        <h1 className="section-title">About</h1>
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
          id="portrait-img"
          src="../images/portrait.jpg"
          alt="Picture of me"
          aspectRatio={1.25}
          imgStyle={{
            width: "100%",
          }}
          placeholder="blurred"
          loading="lazy"
        />
        <p>
          Hi, I'm Corbin 👋 I work as a software engineer in South Texas and
          hold a{" "}
          <a href="https://econbus.mines.edu/engineering-technology-management/">
            M.S.
          </a>{" "}
          &{" "}
          <a href="https://www.mines.edu/academics/mechanical-engineering-degree/">
            B.S.
          </a>{" "}
          from Colorado School of Mines. I've created this platform to document
          my progress 📈 as I expand my skills and knowledge in web development.
          I have a passion for learning, problem-solving, and building
          applications with modern technologies (my favorite is probably React
          ⚛️). While I have a strong background in front-end technologies, I am
          currently cultivating a deeper appreciation for server-side 
          programming at my{" "}
          <a href="https://ksensetech.com/">current company</a>, where I am
          gaining valuable experience with full-stack web apps. When I'm not
          working or coding, I usually spend time with family or friends. Some
          of my hobbies include reading 📚, working out 🏋️, and watching chess ♟
          tutorials on Youtube.
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
