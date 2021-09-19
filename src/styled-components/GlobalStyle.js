import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-size: 1rem;
  line-height: 1.2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  @media(max-width:768px){
  font-size: 0.8rem;
  }
  
}
p{
  font-size:1.1rem;
  line-height: 1.5;
  font-weight: 300;
  @media(max-width:768px){
  font-size:.9rem;
  }
  
}
a {
  text-decoration: none;
  height: 100%;
  width: 100%;
}
ul {
  list-style-type: none;
}
`;
export default GlobalStyle;
