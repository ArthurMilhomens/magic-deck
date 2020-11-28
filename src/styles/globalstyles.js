import { createGlobalStyle } from 'styled-components';

import Poppins from '../assets/fonts/Poppins-Regular.ttf';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    z-index: 1;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins});
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }
  body{
    font: 14px 'Poppins', sans-serif;
    background: #181623;
    color: #eff1fe;
    -webkit-font-smoothing: antialiased !important
  }
`;