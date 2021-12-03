import React from "react";
import {
  HeaderContainer,
  ProfileImage,
  Name,
  UserName,
  JoinDate,
  ProfileBio,
} from "./DashBoardHeader.styled";
import { ThemeProvider } from "styled-components";
import formatUserJoinDate from "../../../utilities";

const theme = {
  colors: {
    userName: "#0079ff",
    grey: "#697c9a",
  },
  tablet: "768px",
  mobile: {
    minWidth: "320px",
    maxWidth: "600px",
  },
};

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
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <ProfileImage src={avatar_url} alt="Profile Image" />
        <Name>{name}</Name>
        <UserName>
          <a href={html_url}>@{login}</a>
        </UserName>
        <JoinDate>{userJoinDateFormatted}</JoinDate>
        <ProfileBio>{bio}</ProfileBio>
      </HeaderContainer>
    </ThemeProvider>
  );
}
