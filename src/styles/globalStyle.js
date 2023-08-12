import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #adb5bd;
      border: none;
    }


    body {        
        font-family: 'Lato', sans-serif;
    }

    h1, h2, h3, h4 {
        color: #e9ecef;
    }

    p {
        color: #adb5bd;
    }

    span {
        color: #ced4da;
    }

    label {
        color: #f8f9fa;
    }          
`;
