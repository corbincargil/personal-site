import styled from "styled-components";

export const StyledSkills = styled.div`
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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    border-bottom: 1px solid #e6af48;
  }

  .line {
    border-left: 1px solid #e6af48;
    height: 100%;
  }

  .learning {
    width: 25%;
  }

  .skill-list {
    list-style: none;
    padding: 16px;
    background-color: #06074a22;
    border: 2px solid black;
    border-radius: 10px;
    transition: 0.1s;
    width: 75%;
  }

  .skill-list ul {
    margin: 0;
    margin-left: 10%;
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

  @media screen and (max-width: 1150px) {
    .learning {
      width: 50%;
    }
    .learned {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 767.98px) {
    .line {
      display: none;
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

  @media screen and (max-width: 600px) {
    .learned {
      grid-template-columns: repeat(1, 1fr);
    }
    .learning {
      align-self: center;
    }
    .learned {
      justify-items: center;
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
