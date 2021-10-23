import React, { useState } from "react";

const SearchBar = () => {
  const [user, setUser] = useState("");

  const search = (e) => {
    console.log("------searching------");
    e.preventDefault();
    fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUser("");
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
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={(e) => search(e)}>Search</button>
    </form>
  );
};

export default SearchBar;
