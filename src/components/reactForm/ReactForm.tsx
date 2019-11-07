import React, { Component } from 'react';

interface FormState {
    name: string,
    gender: string,
    language: string,
    domain: string,
    comments: string
}


export default class ReactForm extends Component<{}, FormState> {
    
        state: FormState ={
            name:'',
            gender: '',
            language:'',
            domain:'',
            comments:''
            
        };
  
       

        handleChange = (e:any) => {
            console.log("event", e.target.value);
            this.setState({
              name:e.target.value.name,
              gender: e.target.value.gender     
            }
            )
           }

        //    handleSubmit= (t:any)=>{
        //     console.log("submit",this.state)

        //    } 
        handleSubmit = (e:any) => {
            e.preventDefault();
            console.log("submit",this)
            // alert(`You have successfully submitted${this.state.name}`);
          }
    
    
    render() {
        return (
            <div>
                <h2>React Form And Validation</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
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
                        onChange={this.handleChange} />
                            </label>
                        </li>

                        <li>
                            <label>
                                Female:
                                <input 
                        type="radio" 
                        value="male" 
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange} />
                            </label>
                        </li>
                    </ul>
                    <br /><br />
                    <p> Language Known:</p>
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
                    <br/><br/>
                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}