import React from "react";
import styled from "styled-components";

const InfoContainerStyled = styled.ul`
  background-color: ${(props) => props.theme.body};
  border-radius: 15px;
  padding: 15px 86px 17px 32px;

  grid-column: 2 / 3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 13px;
    font-weight: 400;
  }

  li > p:nth-child(2) {
    color: ${(props) => props.theme.titleColor};
    font-size: 22px;
    font-weight: 700;
    font-style: normal;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 18px 14px;
    justify-content: space-around;

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
`;

export default function InfoContainer({ public_repos, followers, following }) {
  return (
    <InfoContainerStyled>
      <li>
        <p>Repos</p>
        <p>{public_repos}</p>
      </li>
      <li>
        <p>Followers</p>
        <p>{followers}</p>
      </li>
      <li>
        <p>Following</p>
        <p>{following}</p>
      </li>
    </InfoContainerStyled>
  );
}
