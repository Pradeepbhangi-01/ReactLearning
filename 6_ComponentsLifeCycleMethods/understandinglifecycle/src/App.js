import { Component } from "react";
import TimerOne from "./Timer/TimerOne";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

import ErrorBoundary from "./ErrorBoundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
    };
  }

  handleTimerOn = () => {
    this.setState((prevState) => ({ timerOn: !prevState.timerOn }));
  };
  // render() {
  //   return (
  //     <>
  //       <TimerOne timerOn={this.state.timerOn} />
  //       <button onClick={this.handleTimerOn}>
  //         {this.state.timerOn ? "STOP" : "START"}
  //       </button>
  //     </>
  //   );
  // }

  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>

        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
