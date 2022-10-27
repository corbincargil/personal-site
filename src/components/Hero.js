import React from "react";
import { StyledHero, Logo } from "./styles/Hero.styled";
import Navbar from "./Navbar";
import logo from "../images/corbin-logo-cropped.png";
// import heroImage from "../images/hero.jpg";

export default function Hero() {
  return (
    <StyledHero bg="blue">
      <Navbar />
      <Logo id="banner">
        <img src={logo} alt="Corbin Cargil logo" />
      </Logo>
      {/* <p>
        <a href="https://www.pexels.com/photo/blue-and-white-starry-night-sky-4644812/">
          Photo by Felix Mittermeier:
        </a>
      </p> */}
    </StyledHero>
  );
}
