import styled from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  #animation {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  p {
    position: absolute;
    bottom: 60px;
    left: 10px;
  }
  :nth-child(2) {
    justify-self: center;
  }
`;

export const Logo = styled.div`
  position: relative;
  top: 50vh;
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 1rem;
    width: 50rem;
  }

  @media screen and (max-width: 1199.98px) {
    img {
      width: 45rem;
    }
  }

  @media screen and (max-width: 991.98px) {
    img {
      width: 35rem;
    }
  }

  @media screen and (max-width: 767.98px) {
    img {
      width: 30rem;
    }
  }

  @media screen and (max-width: 575.98px) {
    img {
      width: 20rem;
    }
  }
`;
