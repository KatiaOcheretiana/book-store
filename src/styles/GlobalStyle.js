import { createGlobalStyle } from "styled-components";
import "modern-normalize";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
    },
    textLayout: {
      main: "#ffff",
    },
  },
});

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}



*,
*::before,
*::after {
  box-sizing: inherit;
}
p,
h1,
h2,
h3,
ol,
ul,
fieldset,
input,
button,
textarea {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

button {
  cursor: pointer;

}

img {
  display: block;
  max-width: 100%;
}


body {
  margin: 0 ;
   font-family: sans-serif;
  color: black;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
