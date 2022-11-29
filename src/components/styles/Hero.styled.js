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
    width: 60%;
    margin-left: 40%;
  }

  @media screen and (max-width: 1199.98px) {
    #animation .gatsby-image-wrapper {
      width: clamp(250px, 75%, 1000px);
      margin-left: 25%;
    }
  }
`;
