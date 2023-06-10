import styled from "styled-components";

const buttonHeight = "45px";
const buttonWidth = "45px";

export const StyledBlogList = styled.div`
  li {
    list-style: none;
  }

  h2:hover {
    color: orange;
    transition: 0.2s;
    cursor: pointer;
  }

  .date-posted {
    font-style: italic;
    color: grey;
    font-size: 0.9rem;
  }

  .divider {
    width: 500px;
    border-bottom: 1px solid black;
  }
`;
