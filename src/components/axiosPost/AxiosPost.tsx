import React,{Component} from 'react';
import API from '../../config/AxiosBase';

interface State {
    name:string
}

export default class AxiosPost extends Component<{}, State> {
  state:State = {
    name: '',
  }

  handleChange = (event:any) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event:any) => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    API.post(`users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
          <h3>Axios Post</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}