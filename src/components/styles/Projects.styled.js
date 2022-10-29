import styled from "styled-components";

export const StyledProjects = styled.div`
  position: relative;
  top: 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh;

  #projects-title {
    font-size: 3rem;
    width: 100px;
  }

  #projects-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  z-index: 50;
`;
