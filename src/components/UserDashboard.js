import React from "react";

const UserDashBoard = () => {
  return (
    <div className="dashboard" style={{ marginTop: "30px" }}>
      <img src="" alt="" className="userProfilePic" />
      <p className="name">The Octocat</p>
      <p className="username">@octocat</p>
      <p className="join-date">Joined 25 Jan 2011</p>
      <p className="profile-bio">this profile has no bio</p>
      <ul className="container">
        <li className="repos">
          <p>Repos</p>
          <p>8</p>
        </li>
        <li className="followers">
          <p>Followers</p>
          <p>3938</p>
        </li>
        <li className="following">
          <p>Following</p>
          <p>9</p>
        </li>
      </ul>
      <ul className="gridContainer">
        <li>
          <p>Location</p>
        </li>
        <li>
          <p>Twitter</p>
        </li>
        <li>
          <p>Link</p>
        </li>
        <li>
          <p>Work Location</p>
        </li>
      </ul>
    </div>
  );
};

export default UserDashBoard;
