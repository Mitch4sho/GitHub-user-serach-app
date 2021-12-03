import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  background-color: #fefefe;
  margin-bottom: 30px;
  padding: 18px;
  text-align: center;
  font-family: "Space Mono", monospace;
  border-radius: 15px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 6px 7px;

    form {
      display: flex;
      justify-content: unset;
      grid-gap: 7px;
      gap: 7px;
    }
  }
`;

const SearchBar = ({
  onSearch,
  userNotFound,
  currentUsername,
  setUsername,
}) => {
  return (
    <SearchBarContainer>
      <form>
        <SearchInput
          currentUsername={currentUsername}
          setUsername={setUsername}
        />
        <SearchButton
          userNotFound={userNotFound}
          currentUsername={currentUsername}
          onSearch={onSearch}
          setUsername={setUsername}
        />
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
