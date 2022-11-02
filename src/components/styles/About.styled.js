import styled from "styled-components";

export const StyledAbout = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  #about-title {
    font-size: 3rem;
  }

  #about-content {
    padding: 40px 40px 80px;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: solid 1px black;
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
`;
