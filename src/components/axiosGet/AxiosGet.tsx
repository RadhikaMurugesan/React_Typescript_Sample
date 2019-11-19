import React, {Component, Fragment} from 'react';
import API from '../../config/AxiosBase';

interface Obj {
    name:string
}

interface State {
    persons:Array<Obj>;    
}


export default class AxiosGet extends Component<{}, State>{
  state: State = {
    persons: []
  }

  componentDidMount() {
    API.get(`users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
        <Fragment>
        <h3>Axios GET</h3>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
      </Fragment>
    )
  }
}