import React from "react";
import { StyledCredits } from "./styles/Credits.styled";
import closeIcon from "../images/close.png";

export default function Credits(props) {
  const { setShowCredits } = props;

  const credits = [
    {
      label: "Next/prev arrow icons by: ",
      href: "https://www.flaticon.com/free-icons/next",
      title: "next icons",
      href_text: "Arkinasi - Flaticon",
    },
    {
      label: "Up arrow icons by: ",
      href: "https://www.flaticon.com/free-icons/up-arrow",
      title: "up-arrow icons",
      href_text: "dmitri13 - Flaticon",
    },
    {
      label: "Skill icons by: ",
      href: "https://icons8.com/icon/set/logos/color",
      title: "skill icons",
      href_text: " icons8.com",
    },
    {
      label: "Three.js background: ",
      href: "https://www.vantajs.com/",
      title: "background",
      href_text: "Vanta.js",
    },
  ];

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
          {credits.map((c) => {
            return (
              <p>
                <span>{c.label}</span>
                <a href={c.href} title={c.title}>
                  {c.href_text}
                </a>
              </p>
            );
          })}
        </div>
      </div>
    </StyledCredits>
  );
}
