import React, { Component } from "react";
import './ReactTable.css';

export class ReactTable extends Component {
  pressed() {
    console.log("hello");
  }

  render() {
    return (
      <div className='react-table'>
        <table>
          <caption>Monthly savings</caption>
          <tbody>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>February</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ReactTable;
