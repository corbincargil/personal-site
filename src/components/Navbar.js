import React from "react";
import { StyledNavbar } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar id="nav-bar">
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    </StyledNavbar>
  );
}
