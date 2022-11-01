import styled from "styled-components";

export const StyledContact = styled.div`
  position: relative;
  top: 100vh;
  height: 80vh;
  background-color: #646481;

  form {
    margin: 10px;
    padding: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  label {
    align-self: flex-start;
  }

  input {
    align-self: flex-end;
  }
  #name,
  #email,
  #subject,
  #message {
    width: 80%;
  }

  #message {
    height: 80px;
  }

  .parallax {
    width: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  z-index: 100;
  /* This is our style for the invalid fields */
  /* input:invalid {
    border-color: #900;
    background-color: #fdd;
  }

  input:focus:invalid {
    outline: none;
  } */

  /* This is the style of our error messages */
  /* .error {
    width: 100%;
    padding: 0;

    font-size: 80%;
    color: white;
    background-color: #900;
    border-radius: 0 0 5px 5px;

    box-sizing: border-box;
  }

  .error.active {
    padding: 0.3em;
  } */
`;
