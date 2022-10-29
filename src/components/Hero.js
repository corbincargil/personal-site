import React from "react";
import { StyledHero, Logo } from "./styles/Hero.styled";
import Navbar from "./Navbar";
import logo from "../images/corbin-logo-cropped.png";
import { Parallax } from "react-scroll-parallax";
import hero from "../images/hero.jpg";

export default function Hero() {
  return (
    <StyledHero>
      <Parallax speed={-68} shouldAlwaysCompleteAnimation={false}>
        <div id="hero-bg"></div>
      </Parallax>
      <Navbar />
      <Parallax
        speed={-5}
        startScroll={100}
        endScroll={600}
        shouldAlwaysCompleteAnimation={false}
      >
        <Logo id="banner">
          <img src={logo} alt="Corbin Cargil logo" />
        </Logo>
      </Parallax>
      <p>
        <a href="https://www.pexels.com/photo/blue-and-white-starry-night-sky-4644812/">
          Photo by Felix Mittermeier:
        </a>
      </p>
    </StyledHero>
  );
}
