import React from "react";
import styled from "styled-components";
import formatUserJoinDate from "../../utilities";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 37px;

  grid-column: 1 / span 3;

  @media (min-width: 320px) and (max-width: 600px) {
    column-gap: 19px;
  }

  img {
    width: 117px;
    height: 117px;
    border-radius: 50%;

    grid-column: 1 / 2;
    grid-row: 1 / -1;

    @media (min-width: 320px) and (max-width: 600px) {
      width: 70px;
      height: 70px;
    }
  }
`;

const Name = styled.p`
  margin-bottom: 2px;
  font-size: 26px;
  font-weight: 700;
  color: ${(props) => props.theme.titleColor};

  @media (max-width: 768px) {
    grid-column: 2 / span 3;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 16px;
  }
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  color: #0079ff;

  grid-column: 2 / 3;

  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 13px;
  }
`;

const JoinDate = styled.p`
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.fontColor};

  justify-self: end;
  grid-column: 3 / span 3;
  grid-row: 1 / 2;

  @media (max-width: 768px) {
    grid-column: 2 / span 2;
    grid-row: 3 / 4;
    justify-self: unset;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    font-size: 13px;
  }
`;

const ProfileBio = styled.p`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.fontColor};

  grid-column: 2 / span 3;

  @media (max-width: 768px) {
    margin-top: 38px;
    grid-column: 1 / span 4;
    grid-row: 4 / 4;
  }

  @media (min-width: 320px) and (max-width: 600px) {
    margin-top: 30px;
    grid-column: 1 / span 4;
  }
`;

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
    <HeaderContainer>
      <img src={avatar_url} />
      <Name>{name}</Name>
      <UserName>
        <a href={html_url}>@{login}</a>
      </UserName>
      <JoinDate>{userJoinDateFormatted}</JoinDate>
      <ProfileBio>{bio}</ProfileBio>
    </HeaderContainer>
  );
}
