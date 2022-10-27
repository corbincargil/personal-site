import styled from "styled-components";
import hero from "../../images/hero.jpg";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${hero});
  height: 90vh;
`;

export const Logo = styled.div`
  background-color: #ffffff3e;
  justify-self: center;
  display: flex;
  justify-content: flex-end;
  img {
    margin-right: 1rem;
    width: 50rem;
  }
`;
