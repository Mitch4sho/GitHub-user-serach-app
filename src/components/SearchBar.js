import React, { useState } from "react";

const SearchBar = () => {
  const [username, setUsername] = useState("");

  const search = (e) => {
    console.log("------searching------");
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUsername("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search Github username..."
        name="searchbox"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={(e) => search(e)}>Search</button>
    </form>
  );
};

export default SearchBar;
