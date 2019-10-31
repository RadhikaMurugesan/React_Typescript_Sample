import React, { Component } from "react";
import './styles.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number;
}

export default class StateAndProps extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    

    render() {
        const { name } = this.props;

        

        return (
            <div className="mainDiv">
                <div>
                    <h2>Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}</h2>
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        );
    }

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }
}

//global function, if we want to put the fn inside the class remove the function keyword and add this before calling the function
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }