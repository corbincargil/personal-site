import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StyledNavbar } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar id="nav-bar">
      <ul>
        <li onClick={() => scrollTo("#about")}>About</li>
        <li onClick={() => scrollTo("#projects")}>Projects</li>
        <li onClick={() => scrollTo("#skills")}>Skills</li>
        <li onClick={() => scrollTo("#contact")}>Contact</li>
      </ul>
    </StyledNavbar>
  );
}
