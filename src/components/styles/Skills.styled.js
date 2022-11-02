import styled from "styled-components";

export const StyledSkills = styled.div`
  background-color: #06074a;
  color: #06074a;
  margin-top: 2rem;
  padding: 1.5rem;
  height: 90vh;

  #skills-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 90%;
  }
  .learned {
    padding-bottom: 40px;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    border-bottom: 1px solid white;
  }
  .learned :first-child,
  .learned :nth-child(5) {
    grid-row-start: 1;
    grid-row-end: span 2;
  }
  .line {
    grid-row-start: 1;
    grid-row-end: span 2;
    border-left: 1px solid white;
    height: 80%;
  }

  .learning {
    width: 25%;
  }

  .skill-list {
    list-style: none;
    padding: 16px;
    background-color: #e6af48;
    border: 2px solid black;
    border-radius: 10px;
    transition: 0.5s;
  }
  .skill-list:hover {
    scale: 0.95;
    /* border: 1px solid black; */
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    /* box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
    box-shadow: rgb(0, 0, 0) 3px 3px 6px 0px inset,
      rgba(18, 18, 18, 0.5) -3px -3px 6px 1px inset;
    transition: 0.5s;
  }
  .skill {
    margin: 8px 0px;
    width: clamp(130px, 200px, 15%);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: 0.2s;
  }
  /* .skill:hover {
    scale: 1.2;
    transition: 0.5s;
  } */
  .skill img {
    width: 36px;
  }
`;
