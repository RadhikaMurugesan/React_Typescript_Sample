import React, { FunctionComponent } from 'react';
import { Route, Link } from 'react-router-dom';
import UserProps from '../../models/UsersInterface';
import User from '../individualUser/IndividualUser';

interface Props {
  userProps: Array<UserProps>;
}

export const Users: FunctionComponent<Props> = ({
  userProps }) => {
  console.log("userProps", userProps);
  const userList = userProps;
  return (
    <ul>
      {userList.map((user) =><li key={user.id}> <Link to={`/users/${user.id}`}> {user.name} </Link></li>)}
      <Route path="/users/:id"  render={({match}) => (
       <User userProps={userList.find(u => u.id == match.params.id)} />
)}  />  
    </ul>
  );
}


export default Users  