import React, { Component } from 'react';
import { any } from 'prop-types';

interface FormState {
    userName: string,
    gender: string,
    language: string,
    domain: string,
    comments: string
}


export default class ReactForm extends Component<{}, FormState> {
    
        state: FormState ={
            userName:'',
            gender: '',
            language:'',
            domain:'',
            comments:''
            
        };
  
       

        handleChange = (event:React.FormEvent<HTMLInputElement>) => {
            console.log('event',event.currentTarget.value);
            
            const name = event.currentTarget.name;
            const value = event.currentTarget.value;
            this.setState({[name]: value}as Pick<FormState, keyof FormState>);
            console.log('name', this.state.userName);
            
           }

        //    handleSubmit= (t:any)=>{
        //     console.log("submit",this.state)

        //    } 
        handleSubmit = (e:any) => {
            e.preventDefault();
           
           console.log('name', this.state.userName);
           
          }
    
    
    render() {
        return (
            <div>
                <h2>React Form And Validation</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.userName} name="userName" onChange={this.handleChange} />
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
                        name={this.state.gender}
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange} />
                            </label>
                        </li>

                        <li>
                            <label>
                                Female:
                                <input 
                        type="radio" 
                        value="male" 
                        name={this.state.gender}
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />
                            </label>
                        </li>
                    </ul>
                    <br /><br />
                    {/* <p> Language Known:</p>
                    <label>
                     Tamil  
                    <input type="checkbox" value="" name="name" onChange={() => { }} />
                    </label>
                    <br /><br />
                    <label>
                     English  
                    <input type="checkbox" value="" name="name" onChange={() => { }} />
                    </label>
                    <br /><br />
                    <label>
                     Hindi  
                    <input type="checkbox" value="" name="name" onChange={() => { }} />
                    </label>
                    <br /><br />

                    <label>
                        Domain:
                        <select value="">
                            <option value="ReactJs">ReactJs</option>
                            <option value="ReactNative">ReactNative</option>
                            <option value="Java">Java</option>
                            <option value="PHP">PHP</option>
                        </select>
                    </label>
                    <br /><br />

                    <label>
                        Comments:
                    <textarea  value="" name="name" onChange={() => { }} />
                    </label>
                    <br/><br/> */}
                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}