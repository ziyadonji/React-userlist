import React from "react";
import Card from "../Ui/Card";
import classses from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classses.users}>
      <ul>
        {props.users.map((user,index) => (
          <li key={index}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
