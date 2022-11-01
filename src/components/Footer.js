import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import logoBlack from "../images/corbin-logo-cropped.png";

export default function Footer() {
  return (
    <StyledFooter>
      <img id="footer-logo" src={logoBlack} alt="Corbin Cargil Logo (Black)" />
      <p>Designed & Developed by Corbin Cargil &copy; 2022</p>
    </StyledFooter>
  );
}
