import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Search Github username..."
        name="searchbox"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={(e) => {
          onSearch(e, username);
          setUsername("");
        }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
