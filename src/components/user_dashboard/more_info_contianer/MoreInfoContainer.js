import React from "react";
import { formatBlogLink } from "../../../utilities";
import styled from "styled-components";
import IconComponent from "./IconComponent";
import LocationIcon from "../..//../assets/icon-location.svg";
import TwitterIcon from "../..//../assets/icon-twitter.svg";
import LinkIcon from "../..//../assets/icon-website.svg";
import WorkIcon from "../..//../assets/icon-company.svg";

const MoreInfoContainerStyled = styled.ul`
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 19px;
  column-gap: 15px;

  li > p {
    color: #4b6a9b;

    display: flex;
    align-items: center;
    gap: 20px;
  }

  li > p > img {
    color: #4b6a9b;
    width: auto;
    height: 20px;
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
      <IconComponent prop={location} icon={LocationIcon} />
      <IconComponent prop={twitter_username} icon={TwitterIcon} />
      <IconComponent prop={blog} icon={LinkIcon} />
      <IconComponent prop={company} icon={WorkIcon} />
    </MoreInfoContainerStyled>
  );
}
