import styled from "styled-components";

export const StyledNavbar = styled.div`
  color: white;
  font-size: 1.4rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
  }
  li:hover {
    color: orange;
    transition: 0.2s;
  }
  z-index: 3;
`;
