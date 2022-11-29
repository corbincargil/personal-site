import styled from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  #animation {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  #animation .gatsby-image-wrapper {
    width: clamp(250px, 80%, 1000px);
    margin-left: 20%;
  }
`;
