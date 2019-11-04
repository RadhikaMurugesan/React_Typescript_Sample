import React, { Component } from "react";
import ComponentDidMount from '../../components/componentDidMount/ComponentDidMount';
//import GetDerivedStatesFromProps from '../../components/getDerivedStatesFromProps/GetDerivedStatesFromProps';
import StateAndProps from '../../components/withoutLifecycleHooks/State&Props';
import './styles.css';
import Test from '../lifecyclePage/Lifecycle';

export default class HomePage extends Component {

    render() {
        const color = 'pink';
        return (
            <div>
                <h2>Example for componentDidMount()</h2>
                <ComponentDidMount />
                {/* <h2>Example for getDerivedStateFromProps()</h2> */}
                {/* <GetDerivedStatesFromProps ColorName={color} /> */}
                <h2>Program without lifecycle hooks</h2>
                <StateAndProps name="Aaradhana" enthusiasmLevel={10}/>
                <Test/>
                
            </div>

        );
    }
}