import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F6F8FF",
  titleColor: "#222731",
  themeTogglerColor: "#4B6A9B",
  themeTogglerColorHover: "#222731",
  searchFont: "#4B6A9B",
  dashBoardColor: "#FEFEFE",
  userName: "#2B3442",
  fontColor: "#4B6A9B",
  boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567);",
};

export const darkTheme = {
  body: "#141D2F",
  titleColor: "#FFFFFF",
  themeTogglerColor: "#FFFFFF",
  themeTogglerColorHover: "#90A4D4",
  searchFont: "#FFFFFF",
  dashBoardColor: "#1E2A47",
  userName: "#FFFFFF",
  fontColor: "#FFFFFF",
  dropShadow: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body}
  } 

`;
