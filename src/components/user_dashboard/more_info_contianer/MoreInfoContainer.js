import React from "react";
import LocationIcon from "../..//../assets/icon-location.svg";
import TwitterIcon from "../..//../assets/icon-twitter.svg";
import LinkIcon from "../..//../assets/icon-website.svg";
import WorkIcon from "../..//../assets/icon-company.svg";

export default function MoreInfoContainer({
  location,
  twitter_username,
  blog,
  company,
}) {
  const userBlog = blog ? blog.split("//")[1] : "Not Available";
  return (
    <ul className="more-info-container">
      <li>
        <p className={location ? "" : "not-available"}>
          <img src={LocationIcon} alt="" />
          {location ? location : "Not Available"}
        </p>
      </li>
      <li>
        <p>
          <img src={TwitterIcon} alt="" />
          <span className={twitter_username ? "" : "not-available"}>
            {twitter_username ? `@${twitter_username}` : "Not Available"}
          </span>
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
  );
}
