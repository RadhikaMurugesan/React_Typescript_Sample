import React, { Component } from 'react';
import { any } from 'prop-types';

interface FormState {
    userName: string,
    gender: string,
    hindi: boolean,
    english: boolean,
    tamil: boolean,
    domain: string,
    comments: string
}


export default class ReactForm extends Component<{}, FormState> {

    state: FormState = {
        userName: '',
        gender: '',
        hindi: false,
        english: false,
        tamil: false,
        domain: '',
        comments: ''

    };


    handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`Thanks for submitting...!${this.state.userName}`);
       }


    render() {
        return (
            <div>
                <h2>React Form And Validation</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.userName} name="userName"
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>,
                            ): void => this.setState({ userName: ev.target.value })} />
                    </label>
                    <br /><br />

                    <label>
                        Comments:
                    <textarea value={this.state.comments} name="comments"
                            onChange={(
                                ev: React.ChangeEvent<HTMLTextAreaElement>,
                            ): void => this.setState({ comments: ev.target.value })}
                        />
                    </label>
                    <br /><br />
                    <p>Gender:</p>
                    <ul>
                        <li>
                            <label>
                                Male:
                        <input
                                    type="radio"
                                    value="male"
                                    checked={this.state.gender === "male"}
                                    onChange={(
                                        ev: React.ChangeEvent<HTMLInputElement>,
                                    ): void => this.setState({ gender: ev.target.value })} />
                            </label>
                        </li>

                        <li>
                            <label>
                                Female:
                                <input
                                    type="radio"
                                    value="female"
                                    checked={this.state.gender === "female"}
                                    onChange={(
                                        ev: React.ChangeEvent<HTMLInputElement>,
                                    ): void => this.setState({ gender: ev.target.value })} />
                            </label>
                        </li>
                    </ul>
                    <br /><br />
                    <label>
                        Domain:
                        <select
                            value={this.state.domain}
                            onChange={(
                                ev: React.ChangeEvent<HTMLSelectElement>,
                            ): void => this.setState({ domain: ev.target.value })}
                        >
                            <option value="ReactJs">ReactJs</option>
                            <option value="ReactNative">ReactNative</option>
                            <option value="Java">Java</option>
                            <option value="PHP">PHP</option>
                        </select>
                    </label>
                    <br /><br />
                    <p> Language Known:</p>
                    <label>
                        Tamil
                    <input type="checkbox" checked={this.state.tamil}
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>,
                            ): void => this.setState({ tamil: ev.target.checked })}
                        />
                    </label>
                    <br /><br />
                    <label>
                        English
                    <input type="checkbox" checked={this.state.english}
                            onChange={(
                                ev: React.ChangeEvent<HTMLInputElement>,
                            ): void => this.setState({ english: ev.target.checked })}
                        />
                    </label>
                    <br /><br />
                    <label>
                        Hindi
                    <input type="checkbox" checked={this.state.hindi} onChange={(
                            ev: React.ChangeEvent<HTMLInputElement>,
                        ): void => this.setState({ hindi: ev.target.checked })} />
                    </label>
                    <br /><br />
                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}