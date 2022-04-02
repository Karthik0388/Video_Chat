import React from "react";
import {connect} from "react-redux"
import ActiveUsersListItems from "./ActiveUsersListItems";

const ActiveUsersList = ({activeUsers}) => {
  return (
    <div>
      {activeUsers.map(activeUser => (
        <ActiveUsersListItems
          key={activeUser.socketId}
          activeUser={activeUser}
        />
      ))}
    </div>
  );
};
const mapStatetoprops = ({ dashboard }) => ({
  ...dashboard,
});

export default connect(mapStatetoprops)(ActiveUsersList);
