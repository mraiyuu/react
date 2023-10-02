import React, { Component } from "react";
import ChildComponent from "./ChidComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return <div>
        <ChildComponent greetHandler = {this.greetParent}/>
    </div>;
  }
}

export default ParentComponent;
