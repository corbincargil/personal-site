import styled from "styled-components";

const buttonHeight = "45px";
const buttonWidth = "45px";

export const StyledScrollToTop = styled.div`
  z-index: 50;
  position: fixed;
  right: 25px;
  bottom: 25px;
  height: ${buttonHeight};
  width: ${buttonWidth};
  border-radius: 100px;

  .img-background {
    background-color: white;
    height: ${buttonHeight};
    width: ${buttonWidth};
    border-radius: 100px;
  }
  .img-background:hover {
    scale: 1.1;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    transform: rotate(1turn);
    transition: 0.55s;
  }

  img {
    width: 100%;
  }
`;
