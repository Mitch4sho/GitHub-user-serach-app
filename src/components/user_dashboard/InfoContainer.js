import React from "react";

export default function InfoContainer({ public_repos, followers, following }) {
  return (
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
  );
}
