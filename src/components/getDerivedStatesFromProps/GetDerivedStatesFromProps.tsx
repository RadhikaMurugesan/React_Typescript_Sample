import React, { Component } from "react";
import './styles.css';
import {ColorName} from '../../models/ColorName_Interface';

interface Props {
  ColorName: ColorName
}
interface State {
  color: string
}

export default class GetDerivedStatesFromProps extends Component<Props, State> {
  state: State = {
    color:'yellow'
  }
  changeColor = () => {
    this.setState({
      color:'blue'
    })
  }
  static getDerivedStateFromProps(props:any, state:any) {
    return { color: props.ColorName };
  }
  render() {
    return (
      <div className="mainContainer">
        <h2>My favorite color is {this.state.color}</h2>
        <button type="button" onClick={this.changeColor}>Change color</button>

      </div>
    );
  }
}