import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "AmsterdamOne";
  src: url('/fonts/AmsterdamOne-eZ12l.ttf');
}
  :root {
  --logo-font : 'AmsterdamOne', sans-serif;
  --primary-font : "Play", sans-serif;
  --secondary-font :'Pacifico';
  --transparent-bg : rgb(0, 0, 0, 0.5);
  --yellow : #f9b42a;
  --green : #0d560d;
  --hover-yellow : #ac7c1d;
  --black : #040505;
  --red : #dc2626;
  --white : #ffffff;
  --dark-grey : #5A5453;
  --light-grey : #f3f4f6;
  --border_radius_small: 5px;
  --short-transition: 0.5s ease-in-out;
  --box_shadow: 0px 2px 5px rgba(99,99,99,.4);
  --white-filter: invert(100%) sepia(6%) saturate(270%) hue-rotate(337deg) brightness(112%) contrast(100%);
}

*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}


body {
  font-size: .8125rem;
  font-family: var(--primary-font);
  scroll-behavior: smooth;
  font-weight: 400;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: var(--black);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--yellow);
  }

  @media (min-width : 768px) {
    font-size: 1rem;
  }
}

a {
  text-decoration: none;
  color: inherit;
  background: none;
}

button {
  background: inherit;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

  button:disabled {
    cursor: not-allowed !important;
  }

section {
  padding: 2rem 0 5rem;
}

`;

export default GlobalStyles;
