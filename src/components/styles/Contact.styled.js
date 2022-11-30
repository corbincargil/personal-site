import styled from "styled-components";

const containerWidth = "30%";
const containerHeight = "400px";
const containerMargin = "20px 10px";
const containerPadding = "25px";
const containerBgColor = "#c2c2c2ae";
const containerTextColor = "black";
const headerTextColor = "#000000";
const containerBorder = "1px solid black";
const containerBorderRadius = "10px";

export const StyledContact = styled.div`
  min-height: 80vh;
  background-color: #00003c;

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
  z-index: 2;

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
    outline: orange;
    border: 2px solid orange;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    scale: 1.05;
    transition: 0.1s;
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
    height: calc(${containerHeight}*.85);
    #message {
      height: 60px;
    }
  }
`;
