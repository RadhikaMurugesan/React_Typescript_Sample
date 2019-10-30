import React, { Component } from "react";
import ComponentDidMount from '../../components/componentDidMount/ComponentDidMount';
import GetDerivedStatesFromProps from '../../components/getDerivedStatesFromProps/GetDerivedStatesFromProps';
import './styles.css';


export default class HomePage extends Component {

    render() {
        const color = 'pink';
        return (
            <div>
                <h2>Example for componentDidMount()</h2>
                <ComponentDidMount />
                <h2>Example for getDerivedStateFromProps()</h2>
                <GetDerivedStatesFromProps color={'pink'} />
            </div>

        );
    }
}