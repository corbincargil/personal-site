import styled from "styled-components";

const containerWidth = "300px";
const containerHeight = "400px";
const zIndex = 2000;

export const StyledCredits = styled.div`
  z-index: 99;
  position: fixed;
  left: 0;
  top: 0;

  #credit-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    position: fixed;
    left: calc(50% - ${containerWidth} / 2);
    top: calc(50% - ${containerHeight} / 2);
    background-color: #303030f5;
    color: white;
    width: ${containerWidth};
    height: ${containerHeight};
  }
  #credit-container h3 {
    align-self: center;
  }

  #close-button {
    position: relative;
    bottom: 10px;
  }

  #close-button:hover {
    cursor: pointer;
    border: 1px solid white;
    border-radius: 20px;
    scale: 1.1;
    transition: 0.5s;
  }

  #backdrop {
    width: 100vw;
    height: 100vh;
    z-index: ${zIndex - 1};
    backdrop-filter: blur(2px);
  }

  a,
  a:visited {
    color: orange;
    text-decoration: none;
    cursor: pointer;
  }
`;
