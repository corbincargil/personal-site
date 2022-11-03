import React, { useState } from "react";
import { StyledForm } from "./styles/Contact.styled";

export default function ContactForm() {
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
    <StyledForm onSubmit={submitForm} id="contact">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        required
        minLength={5}
        maxLength={30}
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
        maxLength={40}
        onInput={onUserInput}
        value={form.email}
      />
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        required
        minLength={3}
        maxLength={30}
        onInput={onUserInput}
        value={form.subject}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        rows={5}
        placeholder="Type your message here..."
        required
        minLength={6}
        maxLength={150}
        onInput={onUserInput}
        value={form.message}
      />
      <button id="submit" type="submit">
        Send
      </button>
    </StyledForm>
  );
}
