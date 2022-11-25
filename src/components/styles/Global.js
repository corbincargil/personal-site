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
        color: orange;
        font-size: 3rem;
    }

    a:hover {
        cursor: pointer;
    }
`;

export default GlobalStyles;
