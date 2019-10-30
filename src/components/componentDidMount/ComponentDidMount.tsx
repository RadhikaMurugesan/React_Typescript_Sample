import React, { Component } from "react";
import './styles.css';

interface State {
    name: string
  }
export default class componentDidMount extends Component<{}, State>{
    state: State = {
        name:'IronMan'
      }  
    componentDidMount(){
        setTimeout(() => {
            this.setState({name: "CaptainAmerica"})
          }, 2000)
    }
    render() {
        return(
            <div className="mainContainer">
               <h2>My favorite hero is {this.state.name}</h2>

            </div>
        );
    }
}