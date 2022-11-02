import React, { useState, useEffect, useRef } from "react";
import { StyledContact } from "./styles/Contact.styled";
import ContactForm from "./ContactForm";
import linkedInIcon from "../images/linkedin-48.png";
import githubIcon from "../images/github-60.png";

import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

export default function Contact() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x584f98,
          color2: 0x40450,
          size: 4.6,
          speed: 1.7,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <StyledContact ref={myRef}>
      <ContactForm />
      <div id="connect">
        <h2>Connect with me</h2>
        <p>
          I am always looking to collaborate and meet new people. Use the form
          to shoot me an email or you can find me via the links below!
        </p>
        <div id="icon-container">
          <a href="https://www.linkedin.com/in/corbin-cargil-65b4271b5">
            <img src={linkedInIcon} alt="" />
          </a>
          <a href="https://github.com/corbincargil">
            <img src={githubIcon} alt="" />
          </a>
        </div>
      </div>
    </StyledContact>
  );
}
