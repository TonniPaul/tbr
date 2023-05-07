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
  --black : #040505;
  --red : #dc2626;
  --white : #ffffff;
  --dark-grey : #5A5453;
  --light-grey : #f3f4f6;
  --border_radius_small: 5px;
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
}

section {
  padding: 2rem 0;

    @media (min-width : 768px) {
      padding: 4rem 0;
    }
}

`;

export default GlobalStyles;
