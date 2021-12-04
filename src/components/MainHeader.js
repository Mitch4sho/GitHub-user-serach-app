import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  h1 {
    font-weight: 700;
    font-style: normal;
    font-size: 26px;
    color: ${(props) => props.theme.titleColor};
  }

  button {
    width: 40px;
    height: 19px;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    font-family: "Space Mono", monospace;
    color: ${(props) => props.theme.themeTogglerColor};
    background-color: ${(props) => props.theme.body};
    border: none;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.themeTogglerColorHover};
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin-top: 32px;
  }
`;

export default function MainHeader({ themeToggler, theme }) {
  const buttonTheme = theme === "light" ? "Dark" : "Light";
  return (
    <TitleWrapper>
      <h1>devfinder</h1>
      <div>
        <button onClick={() => themeToggler()}>{buttonTheme}</button>
      </div>
    </TitleWrapper>
  );
}
