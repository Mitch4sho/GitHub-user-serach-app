import React, { useEffect, useState } from "react";
import Doge from "../assets/qZduXAEoyN41zQ223nXn0BgevlbnaobL0awPmBspcgw.jpg";
import LocationIcon from "../assets/icon-location.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import LinkIcon from "../assets/icon-website.svg";
import WorkIcon from "../assets/icon-company.svg";
import "../styles/userDashboard.css";

/*
  TODO:
  - NULL STATE WILL LOAD IF USER IS NOT FOUND

  - CONTINUE TO FINISH STYLING ON USER DASHBOARD
*/

const getDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = new Date(date).getFullYear();
  const month = months[new Date(date).getMonth()];
  const day = new Date(date).getDate();

  return [year, month, day];
};

const UserDashBoard = ({ user }) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [joinDate, setJoinDate] = useState(null);

  useEffect(() => {
    if (Object.keys(user).length) {
      setInitialLoad(false);
      const date = getDate(user.created_at);
      setJoinDate(date);
    }
  }, [user]);

  return (
    <div>
      {initialLoad ? (
        <div className="dashboard">
          <header className="header-info">
            <img src={Doge} alt="ProfilePhoto" className="user-profile-pic" />
            <div className="user-info">
              <p className="name">Doge</p>
              <p className="username">@dogeman</p>
              <p className="join-date">Joined 25 Jan 2011</p>
              <p className="profile-bio">Will Dogecoin hit $1</p>
            </div>
          </header>
          <ul className="info-container">
            <li className="repos">
              <p className="title">Repos</p>
              <p className="value">0</p>
            </li>
            <li className="followers">
              <p className="title">Followers</p>
              <p className="value">3998</p>
            </li>
            <li className="following">
              <p className="title">Following</p>
              <p className="value">9</p>
            </li>
          </ul>
          <ul className="grid-container">
            <li>
              <p>
                <img src={LocationIcon} alt="" />
                San Francisco
              </p>
            </li>
            <li>
              <p>
                <img src={TwitterIcon} alt="" />
                <a href="https://twitter.com/dogecoin?lang=en" target="_blank">
                  @dogecoin
                </a>
              </p>
            </li>
            <li>
              <p>
                <img src={LinkIcon} alt="" />
                <a href="https://dogecoin.com" target="_blank">
                  dogecoin.com
                </a>
              </p>
            </li>
            <li>
              <p>
                <img src={WorkIcon} alt="" />
                <a href="https://www.tesla.com" target="_blank">
                  @tesla
                </a>
              </p>
            </li>
          </ul>
        </div>
      ) : (
        <div className="dashboard">
          <header className="header-info">
            <img
              src={user.avatar_url}
              alt="ProfilePhoto"
              className="user-profile-pic"
            />
            <div className="user-info">
              <p className="name">{user.name}</p>
              <p className="username">@{user.login}</p>
              <p className="join-date">{`Joined ${joinDate[2]} ${joinDate[1]} ${joinDate[0]}`}</p>
              <p className="profile-bio">{user.bio}</p>
            </div>
          </header>
          <ul className="info-container">
            <li className="repos">
              <p className="title">Repos</p>
              <p className="value">{user.public_repos}</p>
            </li>
            <li className="followers">
              <p className="title">Followers</p>
              <p className="value">{user.followers}</p>
            </li>
            <li className="following">
              <p className="title">Following</p>
              <p className="value">{user.following}</p>
            </li>
          </ul>
          <ul className="grid-container">
            <li>
              <p className={user.location ? "" : "not-available"}>
                <img src={LocationIcon} alt="" />
                {user.location ? user.location : "Not Available"}
              </p>
            </li>
            <li>
              <p className={user.twitter_username ? "" : "not-available"}>
                <img src={TwitterIcon} alt="" />
                <a href="">
                  {user.twitter_username
                    ? `@${user.twitter_username}`
                    : "Not Available"}
                </a>
              </p>
            </li>
            <li>
              <p className={user.blog ? "" : "not-available"}>
                <img src={LinkIcon} alt="" />
                <a href="">{user.blog ? user.blog : "Not Available"}</a>
              </p>
            </li>
            <li>
              <p className={user.company ? "" : "not-available"}>
                <img src={WorkIcon} alt="" />
                <a href="">{user.company ? user.company : "Not Available"}</a>
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashBoard;
