import styled from "styled-components";

export const StyledSkills = styled.div`
  /* background-color: #06074a; */
  background-color: white;
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
    height: fit-content;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
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
    /* background-color: #e6af48; */
    /* background-color: white; */
    background-color: #06074a22;
    border: 2px solid black;
    border-radius: 10px;
    transition: 0.1s;
    width: 75%;
  }
  /* .skill-list:hover {
    box-shadow: rgb(0, 0, 0) 1px 1px 1px 0px inset,
      rgba(18, 18, 18, 0.5) -1px -1px 1px 1px inset;
    transition: 0.1s;
  } */
  .skill-list ul {
    margin: 0;
    padding: 0;
  }
  .skill {
    margin: 8px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: 0.2s;
  }
  .skill:hover {
    translate: 10px;
    transition: 0.2s;
  }
  .skill img {
    width: 36px;
  }

  @media screen and (max-width: 991.98px) {
    .learning {
      width: 50%;
    }
  }

  @media screen and (max-width: 767.98px) {
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
