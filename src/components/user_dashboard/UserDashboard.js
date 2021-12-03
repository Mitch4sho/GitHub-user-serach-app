import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import InfoContainer from "./InfoContainer";
import MoreInfoContainer from "./more_info_contianer/MoreInfoContainer";
import { ThemeProvider } from "styled-components";
import { UserDashBoardStyled } from "./UserDashBoard.styled";

const theme = {
  bg: "#fefefe",
};

const UserDashBoard = ({ user }) => {
  return (
    <ThemeProvider theme={theme}>
      <UserDashBoardStyled>
        <DashBoardHeader {...user} />
        <InfoContainer {...user} />
        <MoreInfoContainer {...user} />
      </UserDashBoardStyled>
    </ThemeProvider>
  );
};

export default UserDashBoard;
