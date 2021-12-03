import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    color: #f74646;
  }

  button {
    padding: 16px 24px;
    background-color: #0079ff;
    color: #fefefe;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    font-family: "Space Mono", monospace;
    text-align: center;

    &: hover {
      background-color: #60abff;
      cursor: pointer;
    }

    @media only screen and (min-width: 320px) and (max-width: 600px) {
      padding: 12.5px 18px;
    }
  }
`;

export default function SearchButton({
  userNotFound,
  currentUsername,
  onSearch,
  setUsername,
}) {
  return (
    <ButtonWrapper>
      {userNotFound ? <p>No results</p> : ""}
      <button
        onClick={(e) => {
          onSearch(e, currentUsername);
          setUsername("");
        }}
      >
        Search
      </button>
    </ButtonWrapper>
  );
}
