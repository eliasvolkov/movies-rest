import styled, { createGlobalStyle } from 'styled-components';
import { BREAKPOINTS, COLORS } from './constants/ui';

export const GlobalStyle = createGlobalStyle`



::-webkit-scrollbar {
  width: 5px;
}


::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

html{
    font-size: 62.5%;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    background-color: ${COLORS.background};
    box-sizing: border-box;
  }

  img{
      width: 100%;
      height: 100%;
  }

@media screen and (max-width: ${BREAKPOINTS.md}px){
      html{
          font-size: 60%;
      }
  }
  @media screen and (max-width:  ${BREAKPOINTS.sm}px){
      html{
          font-size: 55%;
      }
  }
  @media screen and (max-width: ${BREAKPOINTS.xxs}px){
      html{
          font-size: 40%;
      }
  }
  `;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const gridTheme = {
    breakpoints: {
        // defaults below
        xl: 1904,
        lg: 1264,
        md: 960,
        sm: 502,
        xs: 400,
        // or you can use aliases
        // giant: 1200,
        // desktop: 992,
        // tablet: 768,
        // phone: 576,
        // smaller: 575,
    },
    row: {
        padding: 10, // default 15
        margin: 0,
    },
    col: {
        padding: 5, // default 15
    },
    container: {
        padding: 0, // default 15
        maxWidth: {
            // defaults below
            xl: 1844,
            lg: 1404,
            md: 1160,
            sm: 840,
            xs: 100,
            // or you can use aliases
            // giant: 1140,
            // desktop: 960,
            // tablet: 720,
            // phone: 540,
            // smaller: 540,
        },
    },
};
