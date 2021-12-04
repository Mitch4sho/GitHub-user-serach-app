import React, { useState } from "react";
import MainHeader from "./components/MainHeader";
import SearchBar from "./components/search_bar/SearchBar";
import UserDashBoard from "./components/user_dashboard/UserDashboard";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import Doge from "./assets/qZduXAEoyN41zQ223nXn0BgevlbnaobL0awPmBspcgw.jpg";

const AppStyled = styled.div`
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  width: 730px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  font-family: "Space Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 573px;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    width: 327px;
    display: block;
  }
`;

const DEFAULT_USER = {
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
};

function App() {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);
  const [userNotFound, setUserNotFound] = useState(false);
  const [username, setUsername] = useState("");
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const search = (e, username) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${username}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "Not Found") {
          setUserNotFound(true);
        } else {
          setCurrentUser(response);
          setUserNotFound(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppStyled>
        <MainHeader themeToggler={themeToggler} theme={theme} />
        <SearchBar
          onSearch={search}
          currentUsername={username}
          setUsername={setUsername}
          userNotFound={userNotFound}
        />
        <UserDashBoard user={currentUser} />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
