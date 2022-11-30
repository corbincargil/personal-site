import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px -1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px -50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px -30px -60px -30px;

  #footer-logo {
    width: 240px;
  }

  p {
    font-size: 1.1rem;
  }

  #credits-button:hover {
    color: orange;
    transition: 0.1s;
  }

  @media screen and (max-width: 991.98px) {
  }

  @media screen and (max-width: 767.98px) {
    height: 200px;
    justify-content: flex-end;
    p {
      font-size: 1rem;
      width: 230px;
      text-align: center;
    }
  }

  @media screen and (max-width: 575.98px) {
  }
`;
