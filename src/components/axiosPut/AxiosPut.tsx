import React, {Component, Fragment} from 'react';
import axios from 'axios';
import API from '../../config/AxiosBase';



export default class AxiosPut extends Component{
 

 async componentDidMount() {
  
    const response = await API.put(`posts/1`, {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1
      });    
    console.log('putresponse', response);
  }

  render() {
    return (
        <div>
        <h3>Axios Put</h3>
      
      </div>
    )
  }
}