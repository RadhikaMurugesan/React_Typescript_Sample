import React, {Component} from 'react';
import axios from 'axios';
import API from '../../config/AxiosBase';



export default class AxiosErrorHandling extends Component{
 

 async componentDidMount() {
  
    try {
        // Load async data from an inexistent endpoint.
        let userData = await API.get("/inexistent-endpoint");
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
      
  }

  render() {
    return (
        <div>
        <h3>Axios Error Handling</h3>
      
      </div>
    )
  }
}