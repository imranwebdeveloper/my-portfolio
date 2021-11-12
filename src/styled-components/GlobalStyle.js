import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
 font-family: 'Lato', sans-serif;
  @media(max-width:800px){
  font-size: 0.9rem;
  } 
}
p{
  line-height: 1.5;
  font-weight: 300;
 
  
}
a {
  text-decoration: none;
  height: 100%;
  width: 100%;
  color: inherit;
}

`;
export default GlobalStyle;
