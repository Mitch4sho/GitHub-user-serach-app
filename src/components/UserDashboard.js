import React from "react";
import getDate from "../utilities";
import LocationIcon from "../assets/icon-location.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import LinkIcon from "../assets/icon-website.svg";
import WorkIcon from "../assets/icon-company.svg";
import "../styles/userDashboard.css";

const UserDashBoard = ({ user }) => {
  const userBlog = user.blog ? user.blog.split("//")[1] : "Not Available";
  const joinDate = getDate(user.created_at);

  return (
    <div className="dashboard">
      <header className="header-info">
        <img
          src={user.avatar_url}
          alt="ProfilePhoto"
          className="user-profile-pic"
        />
        <p className="name">{user.name}</p>
        <p className="username">
          <a href={user.html_url}>@{user.login}</a>
        </p>
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
            <a className={user.twitter_username ? "" : "not-available"} href="">
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
            <img src={WorkIcon} alt="companyIcon" />
            <span className={user.company ? "" : "not-available"}>
              {user.company ? user.company : "Not Available"}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default UserDashBoard;
