import React from "react";
import formatUserJoinDate from "../../utilities";
import LocationIcon from "../../assets/icon-location.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import LinkIcon from "../../assets/icon-website.svg";
import WorkIcon from "../../assets/icon-company.svg";
import "../../styles/userDashboard.css";

const UserDashBoard = ({
  name,
  blog,
  created_at,
  avatar_url,
  login,
  bio,
  html_url,
  public_repos,
  followers,
  following,
  location,
  twitter_username,
  company,
}) => {
  const userBlog = blog ? blog.split("//")[1] : "Not Available";
  const formattedDate = formatUserJoinDate(created_at);

  return (
    <div className="dashboard">
      <header className="header-info">
        <img src={avatar_url} alt="ProfilePhoto" className="user-profile-pic" />
        <p className="name">{name}</p>
        <p className="username">
          <a href={html_url}>@{login}</a>
        </p>
        <p className="join-date">{`Joined`}</p>
        <p className="profile-bio">{bio}</p>
      </header>
      <ul className="info-container">
        <li className="repos">
          <p className="title">Repos</p>
          <p className="value">{public_repos}</p>
        </li>
        <li className="followers">
          <p className="title">Followers</p>
          <p className="value">{followers}</p>
        </li>
        <li className="following">
          <p className="title">Following</p>
          <p className="value">{following}</p>
        </li>
      </ul>
      <ul className="grid-container">
        <li>
          <p className={location ? "" : "not-available"}>
            <img src={LocationIcon} alt="" />
            {location ? location : "Not Available"}
          </p>
        </li>
        <li>
          <p>
            <img src={TwitterIcon} alt="" />
            <a className={twitter_username ? "" : "not-available"} href="">
              {twitter_username ? `@${twitter_username}` : "Not Available"}
            </a>
          </p>
        </li>
        <li>
          <p>
            <img src={LinkIcon} alt="" />
            <a className={blog ? "" : "not-available"} href={`${blog}`}>
              {`${userBlog}`}
            </a>
          </p>
        </li>
        <li>
          <p>
            <img src={WorkIcon} alt="companyIcon" />
            <span className={company ? "" : "not-available"}>
              {company ? company : "Not Available"}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default UserDashBoard;
