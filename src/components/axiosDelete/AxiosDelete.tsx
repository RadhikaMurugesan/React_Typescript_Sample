import React, {Component} from 'react';
import API from '../../config/AxiosBase';

interface State {
    id:number
}

export default class AxiosDelete extends Component<{}, State>{
  state:State = {
    id: 0
  }

  handleChange = (event:any) => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async (event:any) => {
    event.preventDefault();

    const response = await API.delete(`users/${this.state.id}`);    
      console.log('response', response);
      
  }

  render() {
    return (
      <div>
          <h3>Axios Delete</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}