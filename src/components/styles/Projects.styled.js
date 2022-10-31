import styled from "styled-components";

export const StyledProjects = styled.div`
  position: relative;
  margin-top: 100px;
  top: 100vh;
  display: flex;
  flex-direction: column;
  height: 100vh;

  #projects-title {
    margin: 20px 0px;
    font-size: 3rem;
    width: 100px;
  }

  #project-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #project-content h2 {
    margin: 0;
  }
  z-index: 50;
`;

export const StyledFeaturedProjectsDisplay = styled.div`
  background-color: cyan;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h3 {
    align-self: left;
    margin-left: 64px;
    width: 200px;
  }
  #main-display {
    padding: 0 0 0 20px;
    width: 75%;
    display: flex;
    flex-direction: column;
  }
  #preview-container {
    width: clamp(500px, 1000px, 90%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  img.project-image {
    background-color: #c7c7c7;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .button {
    height: 64px;
    width: 64px;
    align-self: center;
  }
  .button:hover {
    scale: 1.2;
    transition: 0.3s;
  }
  #tag-container {
    padding: 0px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .tag {
    color: white;
    margin: 6px;
    padding: 6px;
    background-color: orange;
    width: min-content;
    white-space: nowrap;
    border-radius: 10px;
  }

  .tag:hover {
    color: orange;
    background-color: gray;
    scale: 1.2;
    transition: 0.3s;
  }
`;
