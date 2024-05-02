import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
    },
    textLayout: {
      main: "#ffff",
    },
    textSpan: {
      main: "rgba(17, 16, 28, 0.5)",
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
   font-family: Roboto, sans-serif;
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
