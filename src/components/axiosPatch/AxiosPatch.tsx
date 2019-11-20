import React, {Component} from 'react';
import API from '../../config/AxiosBase';

export default class AxiosPatch extends Component {

async componentDidMount() {
    try {
        const response = await API.patch('users/1', {name:'Radhika'});
        console.log('👉 Returned data:', response);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
}

    render(){
        return(
            <h3>Axios Patch</h3>
        );
    }
}


