import React from "react";
import { formatBlogLink } from "../../../utilities";
import CompanyIcon from "../../../assets/CompanyIcon";
import LocationIcon from "../../../assets/LocationIcon";
import TwitterIcon from "../../../assets/TwitterIcon";
import WebsiteIcon from "../../../assets/WebsiteIcon";
import styled from "styled-components";

const MoreInfoContainerStyled = styled.ul`
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 19px;
  column-gap: 15px;

  li {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  li > p {
    color: ${(props) => props.theme.fontColor};
  }

  path {
    fill: ${(props) => props.theme.fontColor};
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default function MoreInfoContainer({
  location,
  twitter_username,
  blog,
  company,
}) {
  blog = formatBlogLink(blog);

  return (
    <MoreInfoContainerStyled>
      <li>
        <LocationIcon />
        <p>{location ? location : "Not available"}</p>
      </li>
      <li>
        <TwitterIcon />
        <p>{twitter_username ? `@${twitter_username}` : "Not available"}</p>
      </li>
      <li>
        <WebsiteIcon />
        <p>{blog ? blog : "Not available"}</p>
      </li>
      <li>
        <CompanyIcon />
        <p>{company ? company : "Not available"}</p>
      </li>
    </MoreInfoContainerStyled>
  );
}
