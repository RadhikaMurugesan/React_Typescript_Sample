import React, { Component } from 'react';
import { NameListInterface } from '../../models/NameListInterface';

interface Props {
    obj:NameListInterface,

}

class TableRow extends Component<Props> {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
        </tr>
    );
  }
}

export default TableRow;