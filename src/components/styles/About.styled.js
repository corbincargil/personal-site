import styled from "styled-components";

export const StyledAbout = styled.div`
  position: absolute;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  height: 80vh;

  #about-title {
    font-size: 3rem;
    /* margin-left: 150px; */
  }

  #about-content {
    display: flex;
    justify-content: space-evenly;
  }

  p {
    width: 40%;
    font-size: 1.2rem;
    line-height: 30px;
  }
  img {
    width: 350px;
    height: auto;
    border-radius: 20px;
  }
  z-index: 40;
`;
