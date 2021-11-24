import { createGlobalStyle } from "styled-components";
import { color } from ".";
import { Background } from "../asset";

const global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    font-family: Noto Sans KR;
  }
  a {
    text-decoration: none;
  }
  body {
    margin: 0;
  }
  html{
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default global;
