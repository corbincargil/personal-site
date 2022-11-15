import styled from "styled-components";

export const StyledSkills = styled.div`
  background-color: #06074a;
  color: #06074a;
  margin-top: 2rem;
  padding: 1.5rem;
  min-height: 90vh;

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
    border-bottom: 1px solid #e6af48;
  }
  .learned :first-child,
  .learned :nth-child(5) {
    grid-row-start: 1;
    grid-row-end: span 2;
  }
  .line {
    grid-row-start: 1;
    grid-row-end: span 2;
    border-left: 1px solid #e6af48;
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
    width: 75%;
  }
  .skill-list:hover {
    scale: 0.95;
    box-shadow: rgb(0, 0, 0) 3px 3px 6px 0px inset,
      rgba(18, 18, 18, 0.5) -3px -3px 6px 1px inset;
    transition: 0.5s;
  }
  .skill-list ul {
    margin: 0;
    padding: 0;
  }
  .skill {
    margin: 8px 0px;
    width: clamp(130px, 200px, 15%);
    display: flex;
    align-items: center;
    gap: 12px;
    transition: 0.2s;
  }
  .skill img {
    width: 36px;
  }

  @media screen and (max-width: 1199.98px) {
    background-color: blue;
  }

  @media screen and (max-width: 991.98px) {
    background-color: skyblue;
    .learning {
      width: 50%;
    }
  }

  @media screen and (max-width: 767.98px) {
    background-color: red;
    .line {
      display: none;
    }
    .learned {
      grid-template-columns: repeat(2, 1fr);
    }
    .learned :nth-child(5) {
      grid-row-start: 1;
      grid-row-end: span 2;
      grid-column-start: 2;
      grid-column-end: span 1;
    }
    .learning {
      width: 90%;
    }
    #current-learning {
      width: 100%;
    }
    #current-learning-list li {
      margin: 16px;
      display: inline-block;
    }
  }

  @media screen and (max-width: 575.98px) {
    background-color: teal;
    .skill-list ul {
      margin-left: 30%;
    }
    .learned {
      grid-template-columns: repeat(1, 1fr);
    }
    .learned :nth-child(5) {
      grid-column: span 1;
      grid-row: span 1;
    }
    .learning {
      align-self: center;
    }
    #current-learning {
      margin: auto;
      width: 80%;
    }
    #current-learning-list li {
      display: flex;
    }
  }
`;
