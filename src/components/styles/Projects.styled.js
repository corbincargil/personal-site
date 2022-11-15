import styled from "styled-components";

export const StyledProjects = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;

  #projects-title {
    margin: 10px 0px;
    font-size: 3rem;
    width: 100px;
  }

  #project-content {
    margin: 20px 0px;
    padding: 75px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: solid 1px black;
    border-bottom: solid 1px black;
  }

  #project-content h2 {
    margin: 0;
    text-decoration: underline;
  }

  @media screen and (max-width: 1199.98px) {
    #project-content {
      padding: 12px;
    }
  }
`;

export const StyledFeaturedProjectsDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  #project-name {
    margin: 0px 0px 10px 0px;
    align-self: left;
    font-size: 2rem;
  }
  #main-content {
    padding: 0 0 0 20px;
    width: 55%;
    display: flex;
    flex-direction: column;
  }
  #preview-container {
    width: clamp(200px, 1000px, 100%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  img.project-image {
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
    margin: 0px 20px;
    width: 45%;
    display: flex;
    flex-direction: column;
  }

  #secondary-title-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  #description-heading {
    font-size: 1.3rem;
    margin-bottom: 24px;
  }
  #repo-link {
    margin: 0 3rem 0 0;
    justify-self: center;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  #repo-link img {
    width: 30px;
  }
  #repo-link a,
  #repo-link a:visited {
    text-decoration: none;
    color: inherit;
    transition: 0.5s;
  }
  #repo-link a:hover {
    color: orange;
    transition: 0.2s;
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
    font-size: 0.9rem;
    line-height: 25px;
    padding: 5px;
  }

  @media screen and (max-width: 1199.98px) {
    background-color: red;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    #main-content,
    #secondary-content {
      width: 80%;
    }
  }

  @media screen and (max-width: 991.98px) {
    background-color: green;
    #main-content,
    #secondary-content {
      margin: 0;
      padding: 0;
    }
    .button {
      height: 48px;
      width: 48px;
    }
    #project-name {
      font-size: 1.5rem;
    }
    #description-heading {
      margin: 8px 0px;
      font-size: 1rem;
    }
    #repo-link img {
      width: 24px;
    }
  }

  @media screen and (max-width: 767.98px) {
    background-color: blue;
  }

  @media screen and (max-width: 575.98px) {
    background-color: yellow;
    .tag {
      display: block;
    }
  }
`;
