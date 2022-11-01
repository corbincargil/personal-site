import styled from "styled-components";

export const StyledSkills = styled.div`
  padding: 1.5rem;
  position: relative;
  top: 100vh;
  height: 100vh;

  #skills-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 90%;
  }
  .learned {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
  }
  .learned :first-child,
  .learned :last-child {
    grid-row-start: 1;
    grid-row-end: span 2;
  }

  .learning {
    width: 75%;
  }

  .skill-list {
    list-style: none;
    padding: 16px;
    /* border: 2px solid black; */
    /* border-radius: 10px; */
    transition: 0.5s;
  }
  .skill-list:hover {
    scale: 1.1;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.8s;
  }
  .skill {
    margin: 8px 0px;
    width: clamp(130px, 200px, 15%);
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .skill img {
    width: 36px;
  }
`;
