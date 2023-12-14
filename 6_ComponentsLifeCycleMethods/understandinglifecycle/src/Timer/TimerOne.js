import React from "react";

class TimerOne extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
    };

    this.timer = null;
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("TimeOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
  }

  render() {
    console.log("TimeOne render");
    return (
      <>
        <h1>
          Time Spent:
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("TimerOne componentDidUpadte");

    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time + 1,
          }));
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    console.log("TimeOne componentWllUnmount");
    clearInterval(this.timer);
  }
}

export default TimerOne;
