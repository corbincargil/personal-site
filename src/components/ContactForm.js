import React, { useState } from "react";
import { StyledForm } from "./styles/Contact.styled";

export default function ContactForm() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() =>
        alert(
          `Thank you, ${form.name}! Your contact request has been submitted.`
        )
      )
      .catch((error) => alert(error));

    e.preventDefault();
  }

  return (
    <StyledForm
      id="contact"
      // onSubmit={submitForm}
      method="post"
      name="contact"
      data-netlify="true"
    >
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
          // onInput={onUserInput}
          // value={form.name}
        />
      </label>
      <label htmlFor="email">
        Your email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          required
          minLength={6}
          maxLength={40}
          // onInput={onUserInput}
          // value={form.email}
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
          // onInput={onUserInput}
          // value={form.subject}
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
          // onInput={onUserInput}
          // value={form.message}
        />
      </label>
      <button id="submit" type="submit">
        Send
      </button>
    </StyledForm>
  );
}
