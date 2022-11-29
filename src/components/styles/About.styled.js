import styled from "styled-components";

export const StyledAbout = styled.div`
  margin: auto;
  min-height: 70vh;

  #about-title {
    font-size: 1.5rem;
  }

  #about-content {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
    padding: 20px 40px 80px;
    width: 80%;
  }

  #portrait-img {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1.25;
    border-radius: 20px;
  }

  p {
    margin-top: 30px;
    font-size: 1.2rem;
    line-height: 30px;
  }

  a,
  a:visited {
    color: inherit;
  }

  a:hover {
    color: orange;
  }

  @media screen and (max-width: 1199.98px) {
    p {
      font-size: 1rem;
      line-height: 25px;
    }
  }

  @media screen and (max-width: 991.98px) {
    min-height: 80vh;
    #about-content {
      margin: auto;
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }
  }

  @media screen and (max-width: 767.98px) {
    #about-content {
      padding: 30px 0px;
      width: 90%;
    }
  }
`;
