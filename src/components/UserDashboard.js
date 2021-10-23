import React from "react";

const UserDashBoard = ({ user }) => {
  console.log(user);
  return (
    <div className="dashboard" style={{ marginTop: "30px" }}>
      <img
        src={user.avatar_url}
        alt="ProfilePhoto"
        className="userProfilePic"
      />
      <p className="name">{user.name}</p>
      <p className="username">{user.login}</p>
      <p className="join-date">Joined {user.created_at}</p>
      <p className="profile-bio">{user.bio}</p>
      <ul className="container">
        <li className="repos">
          <p>Repos</p>
          <p>{user.public_repos}</p>
        </li>
        <li className="followers">
          <p>Followers</p>
          <p>{user.followers}</p>
        </li>
        <li className="following">
          <p>Following</p>
          <p>{user.following}</p>
        </li>
      </ul>
      <ul className="gridContainer">
        <li>
          <p>{user.location}</p>
        </li>
        <li>
          <p>{user.twitter_username}</p>
        </li>
        <li>
          <p>{user.blog}</p>
        </li>
        <li>
          <p>{user.company}</p>
        </li>
      </ul>
    </div>
  );
};

export default UserDashBoard;
