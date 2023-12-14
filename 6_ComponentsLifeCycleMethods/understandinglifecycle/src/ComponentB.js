import { Component } from "react";

class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };

    console.log("ComponentB Constructor");
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentB getDerivedStatefromByProps");
    return null;
  }

  render() {
    console.log("ComponentB render ");
    return (
      <>
        <h2>{this.state.name}</h2>
      </>
    );
  }
}

export default ComponentB;
