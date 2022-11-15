import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: rgba(255, 255, 255, 0.1) 0px -1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px -50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px -30px -60px -30px;

  #footer-logo {
    width: 20%;
  }

  p {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 991.98px) {
    #footer-logo {
      width: 25%;
    }
  }

  @media screen and (max-width: 767.98px) {
    #footer-logo {
      width: 30%;
    }
  }

  @media screen and (max-width: 575.98px) {
    #footer-logo {
      width: 40%;
    }
  }
`;
