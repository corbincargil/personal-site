import styled from "styled-components";

export const StyledBlog = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 90%;

  .blog-title {
    font-size: 2rem;
    font-weight: 600;
  }

  .blog-subheading {
    color: darkgray;
    font-size: 1.2rem;
    font-style: italic;
  }

  .blog-body {
    width: 50%;
    color: red;
  }
`;
