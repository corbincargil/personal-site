import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StyledNavbar } from "./styles/Navbar.styled";
import { navigate } from "gatsby";

export default function Navbar({ currentPage = "" }) {
  switch (currentPage) {
    case "INDEX":
      return (
        <StyledNavbar id="nav-bar">
          <ul>
            <li onClick={() => scrollTo("#about")}>About</li>
            <li onClick={() => scrollTo("#projects")}>Projects</li>
            <li onClick={() => scrollTo("#skills")}>Skills</li>
            <li onClick={() => scrollTo("#contact")}>Contact</li>
            <li onClick={() => navigate("/blogs")}>Blogs</li>
          </ul>
        </StyledNavbar>
      );
    case "BLOGS":
      return (
        <StyledNavbar id="nav-bar">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/blogs")}>Blogs</li>
          </ul>
        </StyledNavbar>
      );
    default:
      return (
        <StyledNavbar id="nav-bar">
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/blogs")}>Blogs</li>
          </ul>
        </StyledNavbar>
      );
  }
}
