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
        loading="lazy"
      />
      <p>
        Designed & Developed by Corbin Cargil &copy; 2022 |{" "}
        <span id="credits-button" onClick={() => setShowCredits(true)}>
          <em>Credits</em>
        </span>
      </p>
    </StyledFooter>
  );
}
