import React, { useEffect, useState } from "react";
import Doge from "../assets/qZduXAEoyN41zQ223nXn0BgevlbnaobL0awPmBspcgw.jpg";
import LocationIcon from "../assets/icon-location.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import LinkIcon from "../assets/icon-website.svg";
import WorkIcon from "../assets/icon-company.svg";
import "../styles/userDashboard.css";

const UserDashBoard = ({
  user,
  initialLoad,
  setInitialLoad,
  joinDate,
  setJoinDate,
  getDate,
}) => {
  useEffect(() => {
    if (Object.keys(user).length) {
      setInitialLoad(false);
      const date = getDate(user.created_at);
      setJoinDate(date);
    }
  }, [user]);

  const userBlog = user.blog ? user.blog.split("//")[1] : "Not Available";
  console.log(userBlog);
  return (
    <div>
      {initialLoad ? (
        <div className="dashboard">
          <header className="header-info">
            <img src={Doge} alt="ProfilePhoto" className="user-profile-pic" />
            <p className="name">Doge</p>
            <p className="username">@dogeman</p>
            <p className="join-date">Joined 25 Jan 2011</p>
            <p className="profile-bio">Will Dogecoin hit $1</p>
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
            <p className="name">{user.name}</p>
            <p className="username">@{user.login}</p>
            <p className="join-date">{`Joined ${joinDate[2]} ${joinDate[1]} ${joinDate[0]}`}</p>
            <p className="profile-bio">{user.bio}</p>
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
              <p>
                <img src={TwitterIcon} alt="" />
                <a
                  className={user.twitter_username ? "" : "not-available"}
                  href=""
                >
                  {user.twitter_username
                    ? `@${user.twitter_username}`
                    : "Not Available"}
                </a>
              </p>
            </li>
            <li>
              <p>
                <img src={LinkIcon} alt="" />
                <a
                  className={user.blog ? "" : "not-available"}
                  href={`${user.blog}`}
                >
                  {`${userBlog}`}
                </a>
              </p>
            </li>
            <li>
              <p>
                <img src={WorkIcon} alt="" />
                <a className={user.company ? "" : "not-available"} href="">
                  {user.company ? user.company : "Not Available"}
                </a>
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashBoard;
