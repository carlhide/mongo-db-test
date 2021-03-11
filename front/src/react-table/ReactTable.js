import React, { Component } from "react";
import "./ReactTable.css";

export class ReactTable extends Component {
  pressed() {
    console.log("hello");
  }

  /*
	"_id" : ObjectId("6047d7560f943e186b9a0e5a"),
	"title" : "Post Two",
	"body" : "Body of post two",
	"category" : "Technology",
	"date" : "Tue Mar 09 2021 21:15:18 GMT+0100 (CET)"
*/

  render() {
    return (
      <div className="react-table">
        <table>
          <caption>MongoDB</caption>
          <tbody>
            <tr>
              <th>_id</th>
              <th>title</th>
              <th>body</th>
              <th>category</th>
              <th>date</th>
            </tr>
            <tr>
              <td>x 1241231</td>
              <td>x My first post</td>
              <td>This is some text</td>
              <td>Test Category</td>
              <td>Tue Mar 09 2021</td>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
              <td>January</td>
              <td>$100</td>
              <td>January</td>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
              <td>January</td>
              <td>$100</td>
              <td>January</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ReactTable;
