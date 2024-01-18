import { createGlobalStyle } from "styled-components";
import  background  from "./assets/bg-pattern-dark.png"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto Slab', sans-serif;
    line-height: 1.5;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0 auto;
    background: radial-gradient(
      circle at top,
      rgba(241, 210, 70, 0.98),
      rgba(250, 176, 103, 0.87)
    ),
    url(${background});
    background-repeat: repeat;
    background-size: 100% 100%, 30% 30%, 100% 100%;
    min-height: 110rem;
  }
`;