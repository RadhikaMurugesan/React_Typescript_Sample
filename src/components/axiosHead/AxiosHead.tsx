import React, {Component, Fragment} from 'react';
import axios from 'axios';
import API from '../../config/AxiosBase';



export default class AxiosHead extends Component<{}>{
 

 async componentDidMount() {
  
    
            const res = await  API.head(`users`);
            console.log('head', res);
              
            console.log(`Status: ${res.status}`);
            console.log(`Content Type: ${res.headers['content-type']}`);
            console.log(`Server: ${res.headers.server}`);
            console.log(`Date: ${res.headers.date}`);
       
  }

  render() {
    return (
        <div>
        <h3>Axios Head</h3>
      
      </div>
    )
  }
}