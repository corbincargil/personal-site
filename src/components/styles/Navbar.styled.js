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
    cursor: pointer;
  }
  z-index: 3;

  @media screen and (max-width: 1199.98px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 991.98px) {
  }

  @media screen and (max-width: 767.98px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 575.98px) {
    font-size: 1rem;
  }
`;
