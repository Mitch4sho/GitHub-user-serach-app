import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserDashBoard from "./components/UserDashboard";
import "./App.css";
import Moon from "./assets/icon-moon.svg";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const search = (e, username) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setCurrentUser(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">devfinder</h1>
        <div className="dark-mode-button">
          <p>Dark</p>
          <img src={Moon} alt="moon-icon" />
        </div>
      </div>
      <SearchBar onSearch={search} />
      <UserDashBoard user={currentUser} />
    </div>
  );
}

export default App;
