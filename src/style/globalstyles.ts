import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Aubrey', cursive;
  }

  html, body {
    height: 100%;
    background-color: ${Colors.colorBackground};
  }
`;
