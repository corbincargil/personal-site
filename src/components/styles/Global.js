import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html, body {
        max-width: 100%;
        overflow-x: hidden;
        overflow-y: visible;
        padding: 0px;
        margin: 0px;
        font-family:  "Open Sans", sans-serif;
    }

    .section-title {
        width: max-content;
        background-color: orange;
        color: white;
        font-size: 2.5rem;
        font-weight: bold;
        border-radius: 20px;
        padding: 0px 10px;
    }

    a:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 767.98px) {
    .section-title {
        font-size: 2rem;
    }
}
`;

export default GlobalStyles;
