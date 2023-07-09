import styled from "styled-components";

const buttonHeight = "45px";
const buttonWidth = "45px";

//* List of blogs
export const StyledBlogList = styled.div`
  margin: auto;
  width: 96vw;
  .blog-container {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-items: center;
  }

  @media screen and (max-width: 1100px) {
    .blog-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 750px) {
    .blog-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

//* Individual blog preview component
export const StyledBlogPreview = styled.li`
  list-style: none;
  width: 90%;
  margin: 10px;
  font-size: 1.1rem;

  .preview-image {
    height: 400px;
    border-radius: 10px;
  }

  h2 {
    font-size: 1.7rem;
  }

  .date-posted {
    font-style: italic;
    color: grey;
    font-size: 0.9rem;
  }

  :hover {
    cursor: pointer;
    h2 {
      color: orange;
      transition: 0.2s;
      cursor: pointer;
    }
  }

  .divider {
    border-bottom: 1px solid black;
  }
`;

//* Blog componenet for an individual
export const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: clamp(100px, 90%, 900px);

  .title-container {
  }
  .blog-title {
    margin-bottom: 4px;
    font-size: 2rem;
    font-weight: 600;
  }

  .blog-subheading {
    margin-top: 4px;
    align-self: flex-start;
    color: darkgray;
    font-size: 1.3rem;
    font-style: italic;
  }

  .image-container {
    margin: 10px 0;
    width: 96%;
    display: flex;
    flex-direction: column;
  }
  .featured-image {
    border-radius: 15px;
  }

  .image-credit {
    margin: 8px;
    align-self: "flex-start";
    opacity: 50%;
    a,
    a:visited {
      color: inherit;
    }

    a:hover {
      color: orange;
    }
  }

  .blog-body {
    margin: 10px 0;
    width: 90%;
    font-size: 1.2rem;
    p {
      margin-block-end: 2.2em;
      line-height: 1.8em;
    }
    ul {
      li {
        font-size: 1.4rem;
        text-decoration: underline;
        list-style: none;
        color: orange;
      }
    }
    ol {
      li {
        margin-block-end: 2.2em;
        line-height: 1.8em;
      }
    }
    pre {
      font-weight: 500;
      background-color: #80808021;
      padding: 15px;
      margin-bottom: 20px;
      border-left: 2px solid orange;
      code {
        color: orange;
        font-family: "Open Sans", sans-serif;
        max-width: 100%;
        text-wrap: wrap;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .blog-title {
      font-size: 1.8rem;
    }
    .blog-subheading {
      font-size: 1.1rem;
    }
  }
`;
