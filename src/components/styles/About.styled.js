import styled from "styled-components";

export const StyledAbout = styled.div`
  margin: 50px 0px;
  min-height: 70vh;
  /* border-bottom: solid 1px black; */

  #about-title {
    font-size: 1.5rem;
  }

  #about-content {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 40px 80px;
    width: 80%;
  }

  img {
    width: 40%;
    height: auto;
    aspect-ratio: 1.25;
    border-radius: 20px;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }

  p {
    width: 55%;
    font-size: 1.2rem;
    line-height: 30px;
  }

  @media screen and (max-width: 1199.98px) {
    img {
      width: 45%;
    }
    p {
      width: 50%;
      font-size: 1rem;
      line-height: 25px;
    }
  }

  @media screen and (max-width: 991.98px) {
    #about-content {
      margin: auto;
      width: 90%;
    }
  }

  @media screen and (max-width: 767.98px) {
    #about-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 70%;
    }
    p {
      width: 80%;
    }
  }
`;
