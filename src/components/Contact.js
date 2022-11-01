import React, { useState } from "react";
import { StyledContact } from "./styles/Contact.styled";
import hero from "../images/hero.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  function onUserInput(e) {
    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(updatedForm);
  }

  function submitForm(e) {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  }

  return (
    <StyledContact>
      <div
        className="parallax"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      ></div>
      <h2>Connect with me</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          required
          minLength={3}
          onInput={onUserInput}
          value={form.name}
        />
        <label htmlFor="email">Your email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
          minLength={6}
          onInput={onUserInput}
          value={form.email}
        />
        {/* <span className="error" aria-live="polite"></span> */}
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
          minLength={3}
          onInput={onUserInput}
          value={form.subject}
        />
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type your message here..."
          required
          minLength={6}
          onInput={onUserInput}
          value={form.message}
        />
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
    </StyledContact>
  );
}
