import styled from "styled-components";
import hero from "../../images/hero.jpg";

const containerWidth = "30%";
const containerHeight = "400px";
const containerMargin = "30px 10px";
const containerPadding = "25px";
const containerBgColor = "#c2c2c2ae";
const containerTextColor = "black";
const headerTextColor = "#000000";
const containerBorder = "1px solid black";
const containerBorderRadius = "10px";

export const StyledContact = styled.div`
  min-height: 80vh;
  background-image: url(${hero});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  #connect {
    margin: ${containerMargin};
    padding: ${containerPadding};
    color: ${containerTextColor};
    background-color: ${containerBgColor};
    width: ${containerWidth};
    height: ${containerHeight / 2};
    border: ${containerBorder};
    border-radius: ${containerBorderRadius};
  }

  #connect h2 {
    color: ${headerTextColor};
    font-size: 2.2rem;
  }

  #connect p {
    font-size: 1.2rem;
  }

  #icon-container img {
    width: 40px;
    transition: 0.3s;
  }
  #icon-container img:hover {
    scale: 1.2;
    transition: 0.3s;
  }
  #icon-container img:active {
    scale: 0.9;
    transition: 0.3s;
  }

  @media screen and (max-width: 1199.98px) {
    background-color: yellow;
    #connect {
      width: 35%;
    }
  }

  @media screen and (max-width: 991.98px) {
    flex-direction: column;
    align-items: center;
    #connect {
      width: 50%;
    }
    #connect h2 {
      font-size: 1.8rem;
    }
    #connect p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 767.98px) {
    background-color: blue;
    #connect {
      width: 70%;
    }
  }
`;

export const StyledForm = styled.form`
  color: ${containerTextColor};
  background-color: ${containerBgColor};
  margin: ${containerMargin};
  padding: ${containerPadding};
  width: ${containerWidth};
  height: ${containerHeight};
  border: ${containerBorder};
  border-radius: ${containerBorderRadius};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  label {
    font-family: inherit;
    align-self: flex-start;
    width: 80%;
  }

  input,
  textarea {
    padding: 4px;
    font-family: inherit;
    border-radius: 5px;
    resize: none;
    border: 1px solid black;
  }
  input:focus,
  textarea:focus {
    border: 1px solid black;
    outline: orange;
    box-shadow: #ffa60078 0px 6px 12px -2px, #ffa60071 0px 3px 7px -3px;
  }

  #name,
  #email,
  #subject,
  #message {
    width: 100%;
  }
  #message {
    height: 120px;
  }

  #submit {
    align-self: center;
    background-color: orange;
    color: black;
    width: 100px;
    height: 30px;
    font-size: 1.3rem;
    border: 1px solid black;
    border-radius: 5px;
  }
  #submit:hover {
    background-color: white;
    color: orange;
    scale: 1.1;
    transition: 0.3s;
  }
  #submit:active {
    scale: 0.9;
  }

  @media screen and (max-width: 1199.98px) {
    width: 35%;
  }

  @media screen and (max-width: 991.98px) {
    width: 50%;
  }

  @media screen and (max-width: 767.98px) {
    width: 70%;
  }
`;
