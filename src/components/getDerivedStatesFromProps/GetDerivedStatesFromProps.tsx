import React, { Component } from "react";
import './styles.css';

export default class GetDerivedStatesFromProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'Black'
    }

  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }
  render() {
    return (
      <div className="mainContainer">
        <h2>My favorite color is {this.state.color}</h2>

      </div>
    );
  }
}