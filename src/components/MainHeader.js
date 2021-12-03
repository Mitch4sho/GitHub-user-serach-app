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
    color: #2b3442;
  }

  button {
    width: 40px;
    height: 19px;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    font-family: "Space Mono", monospace;
    color: #697c9a;
    background-color: #f6f8ff;
    border: none;
    cursor: pointer;

    &:hover {
      color: #2b3442;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    margin-top: 32px;
  }
`;

export default function MainHeader() {
  return (
    <TitleWrapper>
      <h1>devfinder</h1>
      <div>
        <button>Dark</button>
      </div>
    </TitleWrapper>
  );
}
