import React from "react";
import { formatBlogLink } from "../../../utilities";
import { MoreInfoContainerStyled } from "./MoreInfoContainer.styled";
import { ThemeProvider } from "styled-components";
import IconComponent from "./IconComponent";
import LocationIcon from "../..//../assets/icon-location.svg";
import TwitterIcon from "../..//../assets/icon-twitter.svg";
import LinkIcon from "../..//../assets/icon-website.svg";
import WorkIcon from "../..//../assets/icon-company.svg";

const theme = {
  lightTheme: {
    darkBlue: "#4b6a9b",
  },
};

export default function MoreInfoContainer({
  location,
  twitter_username,
  blog,
  company,
}) {
  blog = formatBlogLink(blog);

  return (
    <ThemeProvider theme={theme}>
      <MoreInfoContainerStyled>
        <IconComponent prop={location} icon={LocationIcon} />
        <IconComponent prop={twitter_username} icon={TwitterIcon} />
        <IconComponent prop={blog} icon={LinkIcon} />
        <IconComponent prop={company} icon={WorkIcon} />
      </MoreInfoContainerStyled>
    </ThemeProvider>
  );
}
