import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserDashBoard from "./components/UserDashboard";
import Doge from "./assets/qZduXAEoyN41zQ223nXn0BgevlbnaobL0awPmBspcgw.jpg";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({
    avatar_url: `${Doge}`,
    name: "Doge",
    login: "dogeman",
    created_at: "2011-02-19T10:56:13Z",
    bio: "Will Dogecoin hit $1",
    public_repos: "0",
    followers: "3998",
    following: "9",
    location: "San Francisco",
    twitter_username: "dogecoin",
    blog: "https://dogecoin.com",
    company: "Tesla",
  });
  const [userNotFound, setUserNotFound] = useState(false);

  const search = (e, username) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message !== "Not Found") {
          setCurrentUser(response);
          setUserNotFound(false);
        } else {
          setCurrentUser(currentUser);
          setUserNotFound(true);
        }
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
          <button>Dark</button>
        </div>
      </div>
      <SearchBar onSearch={search} userNotFound={userNotFound} />
      <UserDashBoard user={currentUser} />
    </div>
  );
}

export default App;
