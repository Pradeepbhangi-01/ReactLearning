import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };

    console.log("Component A Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStatefromByProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    let { data } = this.state;
    return (
      <>
        <h1>{this.state.name}</h1>

        {data.map((d) => {
          return (
            <>
              <li key={d.id}>{d.username}</li>
            </>
          );
        })}

        <ComponentB />
      </>
    );
  }
}

export default ComponentA;
