import React from "react";
import { StyledAbout } from "./styles/About.styled";
import portrait from "../images/portrait.jpg";

export default function About() {
  return (
    <StyledAbout>
      <h1>About</h1>
      <p>
        Hi, I’m Corbin. I am a self-taught software developer born & raised in
        south Texas and based in San Antonio. After majoring in mechanical
        engineering at Colorado School of Mines, I began building my programming
        skills as a hobby by taking online classes and working on the occasional
        project while working full time. This soon led me to realize my passion
        for using problem solving and *technology* to develop software solutions
        for those around me. I love learning, building, and getting creative,
        all of which I use sofware development as an outlet for. When I’m not at
        my computer, I enjoy working out, spending time with family & friends,
        and reading. I also really enjoy watching movies/TV, but try to not
        spend too much time inside if I can help it.
      </p>
      <img src={portrait} alt="Portrait" />
    </StyledAbout>
  );
}
