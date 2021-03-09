import React, { Component } from "react";

export class MongoDBTest extends Component {
  
    pressed() {
    console.log("hello");
  }

  render() {
    return (
      <div>
        <label>Hello</label>
        <button onClick={this.pressed}>Press me</button>
      </div>
    );
  }
}
export default MongoDBTest;
