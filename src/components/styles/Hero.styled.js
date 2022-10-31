import styled from "styled-components";
import hero from "../../images/hero.jpg";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  #hero-bg {
    margin-top: -235px;
    position: absolute;
    background-image: url(${hero});
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
  p {
    position: absolute;
    bottom: 60px;
    left: 10px;
  }
`;

export const Logo = styled.div`
  background-color: #ffffff3e;
  margin-top: 300px;
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 1rem;
    width: 50rem;
  }
`;
