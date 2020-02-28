import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from './constants/ui';

export const GlobalStyle = createGlobalStyle`

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

  @media screen and (max-width: 500px){
      html{
          font-size: 50%;
      }
  }
  `;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
