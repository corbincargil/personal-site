import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import logoBlack from "../images/corbin-logo-cropped.png";

export default function Footer(props) {
  const { setShowCredits } = props;

  return (
    <StyledFooter>
      <img
        id="footer-logo"
        src={logoBlack}
        alt="Corbin Cargil Logo (Black)"
        draggable="false"
      />
      <p>
        Designed & Developed by Corbin Cargil &copy; 2022 |{" "}
        <a id="credits-button" onClick={() => setShowCredits(true)}>
          <em>Credits</em>
        </a>
      </p>
    </StyledFooter>
  );
}
