import React from "react";
import { StyledCredits } from "./styles/Credits.styled";
import closeIcon from "../images/close.png";

export default function Credits(props) {
  const { setShowCredits } = props;

  return (
    <StyledCredits>
      <div
        id="backdrop"
        onClick={(e) => {
          setShowCredits(false);
        }}
      >
        <div
          id="credit-container"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img
            id="close-button"
            src={closeIcon}
            onClick={(e) => {
              setShowCredits(false);
            }}
          />
          <h3>Credits</h3>
          <p>
            Arrow icons by:{" "}
            <a
              href="https://www.flaticon.com/free-icons/next"
              title="next icons"
            >
              Arkinasi - Flaticon
            </a>
          </p>
          <p>
            Skill icons by:{" "}
            <a
              href="https://icons8.com/icon/set/logos/color"
              title="skill icons"
            >
              icons8.com
            </a>
          </p>
          <p>
            Three.js background:{" "}
            <a href="https://www.vantajs.com/" title="background">
              Vanta.js
            </a>
          </p>
        </div>
      </div>
    </StyledCredits>
  );
}
