import React, { useRef } from "react";
import { StyledScrollToTop } from "./styles/ScrollToTop.styled";
import upArrow from "../images/up-arrow.png";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Parallax } from "react-scroll-parallax";

export default function ScrollToTop() {
  return (
    <StyledScrollToTop>
      <Parallax
        easing={"easeIn"}
        translateY={["200px", "0px"]}
        startScroll={500}
        endScroll={1000}
      >
        <div className="img-background" onClick={() => scrollTo("#hero")}>
          <img src={upArrow} alt="up arrow" />
        </div>
      </Parallax>
    </StyledScrollToTop>
  );
}
