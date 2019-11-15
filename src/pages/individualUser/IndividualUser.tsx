import React, {Component} from 'react'  

class User extends Component<any> {  

  render() { 
        
  return <h1 >{this.props.userProps.quote}</h1>  
  }  
}  
export default User;