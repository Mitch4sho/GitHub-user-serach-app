import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserDashBoard from "./components/UserDashboard";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const search = (e, username) => {
    console.log("------searching------");
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setCurrentUser(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>devfinder</h1>
      <SearchBar onSearch={search} />
      <UserDashBoard user={currentUser} />
    </div>
  );
}

export default App;
