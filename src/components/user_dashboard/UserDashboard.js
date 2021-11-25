import React from "react";
import DashBoardHeader from "./DashBoardHeader";
import InfoContainer from "./InfoContainer";
import MoreInfoContainer from "./MoreInfoContainer";
import "../../styles/userDashboard.css";

const UserDashBoard = ({ user }) => {
  return (
    <div className="dashboard">
      <DashBoardHeader {...user} />
      <InfoContainer {...user} />
      <MoreInfoContainer {...user} />
    </div>
  );
};

export default UserDashBoard;
