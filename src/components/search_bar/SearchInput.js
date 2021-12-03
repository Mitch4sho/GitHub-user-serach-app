import React from "react";
import styled from "styled-components";
import MagnifyGlass from "../../assets/icon-search.svg";

const SearchBoxWrapper = styled.div`
  width: 60%;

  display: flex;
  align-items: center;
  gap: 24px;

  img {
    width: 24px;
    height: 24px;
  }

  input {
    width: 100%;
    font-family: "Space Mono", monospace;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    border-style: none;
    color: #0079ff;
    &: hover {
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    gap: 4px;
    flex: 1;

    input {
      font-size: 13px;
    }
  }
`;

export default function SearchInput({ currentUsername, setUsername }) {
  return (
    <SearchBoxWrapper>
      <img src={MagnifyGlass} alt="magnify-glass" />
      <input
        type="text"
        placeholder="Search Github username..."
        name="searchbox"
        value={currentUsername}
        onChange={(e) => setUsername(e.target.value)}
      />
    </SearchBoxWrapper>
  );
}
