import React, { Component } from "react";
import './styles.css';

interface State {
  name: string,
  company: string
}

class UserForm extends Component<{}, State> {  
   
  
  state: State = {
    name:'',
    company: ''
  }   
  handleChange = (e:any) => {
     console.log("event", e.target.value);
     this.setState({
       name:e.target.value.name,
       company: e.target.value.company     
     }
     )
    }
    

    render(){
      return(

        <div className="userFormDiv">
          <h2>Class (Or) Stateful Component</h2>
          <form>
          <label>
            Name:
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          </label>    

          <label>
            Company:
            <input type="text" value={this.state.company} name="company" onChange={this.handleChange} />
          </label>
           
        </form>
        
        </div>

        
  
      );
    }
  }

  export default UserForm;