import React, { Component } from 'react';
import Button from '../../components/button';
import './styles.css';
import GetDerivedStatesFromProps from '../../components/getDerivedStatesFromProps';

function Message(props: any) {
    if (props.isLoggedIn)
        return <h1>Welcome User</h1>;
    else
        return <h1>Please Login</h1>;
}


function Login(props: any) {
    return (
        <button className='btn' onClick={props.clickFunc}>
            Login
           </button>
    );
}


function Logout(props: any) {
    return (
        <button className='btn' onClick={props.clickFunc}>
            Logout
           </button>
    );
}

interface Props {
    clickFunc: (event: React.MouseEvent<HTMLButtonElement>) => void

}

interface State {
    isLoggedIn: boolean
}

export default class ConditionalRendering extends Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = { isLoggedIn: false };

        this.ifLoginClicked = this.ifLoginClicked.bind(this);
        this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
    }

    ifLoginClicked() {
        this.setState({ isLoggedIn: true });
    }

    ifLogoutClicked() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        return (
            <div className='mainDiv'>
                <h2>Conditional Rendering</h2>

                <Message isLoggedIn={this.state.isLoggedIn} />

                {
                    (this.state.isLoggedIn) ? (
                        <Logout clickFunc={this.ifLogoutClicked} />
                    ) : (
                            <Login clickFunc={this.ifLoginClicked} />
                        )
                }

            </div>


        );
    }

}