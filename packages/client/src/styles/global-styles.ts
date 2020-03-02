import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

a {
  color: unset;
  &:hover {
  color: unset;
  }
}

strong {
  font-weight: 700;
}

button {
  cursor: pointer;
  background-color: white;
  outline: none;
  border: none;
  &:active {
    outline: none;
    border: none;
  }
}
`;