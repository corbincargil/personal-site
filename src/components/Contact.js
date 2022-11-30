import React from "react";
import { StyledContact } from "./styles/Contact.styled";
import ContactForm from "./ContactForm";
import linkedInIcon from "../images/linkedin-48.png";
import githubIcon from "../images/github-60.png";

export default function Contact() {
  return (
    <StyledContact>
      <ContactForm />
      <div id="connect">
        <h2>Connect with me</h2>
        <p>
          I am always looking to collaborate and meet new people. Use the form
          to shoot me an email or you can find me via the links below!
        </p>
        <div id="icon-container">
          <a
            href="https://www.linkedin.com/in/corbin-cargil-65b4271b5"
            target="_blank"
            draggable="false"
          >
            <img src={linkedInIcon} alt="Linked Icon" draggable="false" />
          </a>
          <a
            href="https://github.com/corbincargil"
            target="_blank"
            draggable="false"
          >
            <img src={githubIcon} alt="Github Icon" draggable="false" />
          </a>
        </div>
      </div>
    </StyledContact>
  );
}
