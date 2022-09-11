import { css } from "@emotion/react";

export const GlobalStyles = () => css`
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0 auto;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    background-color: #7ad8f5;
    color: #fff;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style-type: none;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  button {
    padding: 0;
  }
`;