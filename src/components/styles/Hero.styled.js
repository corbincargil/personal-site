import styled from "styled-components";

export const StyledHero = styled.div`
  height: 100vh;
  #animation {
    background-color: #00003c;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  #animation :nth-child(2) {
    align-self: flex-end;
  }

  #animation .gatsby-image-wrapper {
    width: 750px;
  }

  @media screen and (max-width: 1150px) {
    #animation .gatsby-image-wrapper {
      width: 650px;
    }
  }
  @media screen and (max-width: 900px) {
    #animation .gatsby-image-wrapper {
      width: 550px;
    }
  }
  @media screen and (max-width: 700px) {
    #animation .gatsby-image-wrapper {
      width: 450px;
    }
  }
  @media screen and (max-width: 550px) {
    #animation .gatsby-image-wrapper {
      width: 350px;
    }
  }
`;
