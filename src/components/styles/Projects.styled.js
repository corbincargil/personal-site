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
    text-decoration: underline;
  }
  z-index: 50;
`;

export const StyledFeaturedProjectsDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  #main-content h3 {
    align-self: left;
    margin-left: 64px;
    width: 400px;
    font-size: 1.5rem;
  }
  #main-content {
    padding: 0 0 0 20px;
    width: 65%;
    display: flex;
    flex-direction: column;
  }
  #preview-container {
    width: clamp(500px, 1000px, 100%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  img.project-image {
    /* background-color: #c7c7c7; */
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border-radius: 15px;
    transition: 0.5s;
  }
  img.project-image:hover {
    scale: 1.03;
    box-shadow: rgba(32, 27, 87, 0.24) 0px 54px 55px,
      rgba(32, 27, 87, 0.24) 0px -12px 30px, rgba(32, 27, 87, 0.24) 0px 4px 6px,
      rgba(32, 27, 87, 0.24) 0px 12px 13px, rgba(32, 27, 87, 0.24) 0px -3px 5px;
    transition: 0.5s;
  }
  .button {
    height: 64px;
    width: 64px;
    align-self: center;
  }

  #secondary-content {
    margin: 0px 10px;
    width: 35%;
    display: flex;
    flex-direction: column;
  }

  #secondary-content h3 {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }
  ul {
    padding: 0px;
    padding: 0px;
    list-style: none;
    display: inline;
  }
  .tag {
    display: inline;
    color: white;
    margin: 6px;
    padding: 6px;
    background-color: orange;
    width: min-content;
    white-space: nowrap;
    border-radius: 10px;
    transition: 0.5s;
  }

  .tag:hover {
    color: orange;
    background-color: gray;
    scale: 1.2;
    transition: 0.5s;
  }

  #description-container {
    width: 100%;
  }
`;
