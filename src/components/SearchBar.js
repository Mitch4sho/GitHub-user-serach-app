import React, { useState } from "react";
import "../styles/searchBar.css";
import MagnifyGlass from "../assets/icon-search.svg";

const SearchBar = ({ onSearch, user, initialLoad }) => {
  const [username, setUsername] = useState("");
  return (
    <div className="search-bar">
      <form>
        <div className="search-box-container">
          <img
            className="magnify-glass"
            src={MagnifyGlass}
            alt="magnify-glass"
          />
          <input
            className="search-box"
            type="text"
            placeholder="Search Github username..."
            name="searchbox"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="button-container">
          <p>No results</p>
          <button
            className="search-button"
            onClick={(e) => {
              onSearch(e, username);
              setUsername("");
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
