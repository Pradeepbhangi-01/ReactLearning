import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("Error", error);
    console.log("Error Info", info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong. Contact Admin</h1>;
    }
    return this.props.children;
  }
}
