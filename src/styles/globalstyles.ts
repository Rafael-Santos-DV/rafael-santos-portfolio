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
  .js-animate-all {
    opacity: 0;
  }

  .js-animate-init-all {
    opacity: 0;
    animation: animateItems 500ms cubic-bezier(.82,.24,.83,.67);
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */

  }

  .js-animate-react {
    opacity: 0;
    animation: RemoveAnimateItems 500ms cubic-bezier(.82,.24,.83,.67);
    animation-fill-mode: forwards;
    /* animation-play-state: paused; */
  }

  @keyframes animateItems {
    0% {
      opacity: 0;
      transform: translateX(-20%);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes RemoveAnimateItems {

    0% {
      opacity: 1;
      transform: translate(0%);
    }

    100% {
      opacity: 0;
      transform: translateX(-20%);
    }
  }
`;
