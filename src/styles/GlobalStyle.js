import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2F5294',     // Bleu principal
    secondary: '#E48205',   // Orange
    background: '#f4f4f4',  // Fond global
    textPrimary: '#494953', // Texte principal
    white: '#ffffff',
  },
  fonts: {
    base: 'Arial, sans-serif',
    heading: 'Roboto, serif',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
  borderRadius: {
    small: '8px',
    medium: '16px',
    large: '32px',
  },
};

export const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.base};
    color: ${theme.colors.textPrimary};
    

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`
