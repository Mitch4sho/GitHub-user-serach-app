import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import InfoContainer from "./InfoContainer";
import MoreInfoContainer from "./more_info_contianer/MoreInfoContainer";
import styled from "styled-components";

const UserDashBoardStyled = styled.div`
  width: 100%;
  padding: 48px 42px 48px 42px;
  background-color: ${(props) => props.theme.dashBoardColor};
  border-radius: 15px;
  box-shadow: ${(props) => props.theme.boxShadow};
  drop-shadow: ${(props) => props.theme.dropShadow};

  display: grid;
  grid-template-columns: 117px 2fr;
  gap: 32px 37px;

  li {
    list-style: none;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media only screen and (min-width: 320px) and (max-width: 600px) {
    padding: 32px 24px;
  }
`;
const UserDashBoard = ({ user }) => {
  return (
    <UserDashBoardStyled>
      <DashBoardHeader {...user} />
      <InfoContainer {...user} />
      <MoreInfoContainer {...user} />
    </UserDashBoardStyled>
  );
};

export default UserDashBoard;
