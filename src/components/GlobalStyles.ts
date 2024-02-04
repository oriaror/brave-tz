"use client"
import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    background: rgb(255, 255, 255);
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
  }
`
export default GlobalStyles;