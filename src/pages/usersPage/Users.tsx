import React, {FunctionComponent} from 'react'  
import { string } from 'prop-types'
import UserProps from '../../models/UsersInterface';

interface Props {
  userProps: UserProps | undefined;
}

export const Users: FunctionComponent<Props> = ({
  userProps}) => {
    console.log("userProps", userProps);
    if(userProps) {
      return (
      <h2>{userProps.name}</h2>
      );
    }
    return null;
  }
   
 
export default Users  