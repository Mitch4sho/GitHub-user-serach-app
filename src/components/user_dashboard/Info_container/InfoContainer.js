import React from "react";
import { InfoContainerStyled } from "./InfoContainer.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  lightTheme: {
    mainBG: "#f6f8ff",
    darkBlue: "#4b6a9b",
    black: "#2b3442",
  },
};

export default function InfoContainer({ public_repos, followers, following }) {
  return (
    <ThemeProvider theme={theme}>
      <InfoContainerStyled>
        <li>
          <p>Repos</p>
          <p>{public_repos}</p>
        </li>
        <li>
          <p>Followers</p>
          <p>{followers}</p>
        </li>
        <li>
          <p>Following</p>
          <p>{following}</p>
        </li>
      </InfoContainerStyled>
    </ThemeProvider>
  );
}
