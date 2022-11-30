import React from "react";
import { StyledForm } from "./styles/Contact.styled";

export default function ContactForm() {
  return (
    <StyledForm id="contact" method="post" name="contact" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          minLength={5}
          maxLength={30}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
          minLength={6}
          maxLength={40}
        />
      </label>
      <label htmlFor="subject">
        Subject:
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
          minLength={3}
          maxLength={30}
        />
      </label>
      <label htmlFor="message">
        Message:
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Type your message here..."
          required
          minLength={6}
          maxLength={150}
        />
      </label>
      <button id="submit" type="submit">
        Send
      </button>
    </StyledForm>
  );
}
