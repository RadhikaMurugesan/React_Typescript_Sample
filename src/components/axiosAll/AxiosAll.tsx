import React, {Component, Fragment} from 'react';
import axios from 'axios';
import API from '../../config/AxiosBase';

interface Obj {
    name:string
}

interface State {
    persons:Array<Obj>;    
}


export default class Axiosall extends Component<{}, State>{
  state: State = {
    persons: []
  }

  componentDidMount() {
    axios.all([
        axios.get('https://api.github.com/users/mapbox'),
        axios.get('https://api.github.com/users/phantomjs')
      ])
// return values as single array
//       .then(res => {
//         console.log('Date created: ', res[0].data.created_at);
//   console.log('Date created: ', res[1].data.created_at);
//       })
// if we want to unpack the values from array we need to use the below method
.then(axios.spread((user1, user2) => {
    console.log('Date created: ', user1.data.created_at);
    console.log('Date created: ', user2.data.created_at);
  }));
  }

  render() {
    return (
        <div>
        <h3>Axios All</h3>
      
      </div>
    )
  }
}