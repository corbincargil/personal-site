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
  }

  #about-content {
    display: flex;
    justify-content: space-around;
  }

  p {
    width: 40%;
  }
  img {
    width: 25%;
  }
  z-index: 40;
`;
