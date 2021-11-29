import React from "react";
import DashBoardHeader from "./dashboard_header/DashBoardHeader";
import InfoContainer from "./Info_container/InfoContainer";
import MoreInfoContainer from "./more_info_contianer/MoreInfoContainer";
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
