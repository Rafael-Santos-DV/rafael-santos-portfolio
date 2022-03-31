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
    background-color: ${(props) =>
      props.theme ? Colors.colorWhite : Colors.colorBackground};
  }

  .js-animate-react {
    opacity: 0;
  animation: animateItems 1s ease-out;
  animation-fill-mode: forwards;
  animation-play-state: paused;
  }

  @keyframes animateItems {
    0% {
      opacity: 0;
      transform: translate(0, 20%);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
