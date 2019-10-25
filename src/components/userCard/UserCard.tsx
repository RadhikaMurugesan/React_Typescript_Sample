import React, { FunctionComponent } from "react";
import {User} from "../../models/UserInterface";
import './styles.css';

interface Props {
  userData: User;
}
export const UserCard: FunctionComponent<Props> = ({
  userData
}) => (
  <div className="userCardDiv">
    <h2>Functional (or) Stateless Component</h2>
      Hello, {userData.name}
      <br/>
      You are {userData.age} years old,
      <br/>
      You live at: {userData.address}
      <br/>
      you were born: {userData.dob.toDateString()}
  </div>
);
