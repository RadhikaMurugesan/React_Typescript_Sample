import React, { Component } from 'react';
import TableRow from '../tableRow/TableRow';
import {NameListInterface} from '../../models/NameListInterface';

interface Props {
    data: Array<NameListInterface>
}
class UserList extends Component<Props>{
    
      
      tabRow(){
        if(this.props.data instanceof Array){
          return this.props.data.map(function(object, i){
              return <TableRow obj={object} key={i} />;
          })
        }
      }
      render() {
        return (
            <div>
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        );
      }
}
export default UserList;
