import React from "react";
import formatUserJoinDate from "../../utilities";
export default function DashBoardHeader({
  name,
  avatar_url,
  html_url,
  login,
  bio,
  created_at,
}) {
  const userJoinDateFormatted = formatUserJoinDate(created_at);

  return (
    <header className="header-info">
      <img src={avatar_url} alt="ProfilePhoto" className="user-profile-pic" />
      <p className="name">{name}</p>
      <p className="username">
        <a href={html_url}>@{login}</a>
      </p>
      <p className="join-date">{userJoinDateFormatted}</p>
      <p className="profile-bio">{bio}</p>
    </header>
  );
}
