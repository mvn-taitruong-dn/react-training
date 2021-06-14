import React, { Component } from "react";
import Control from "./Control";
import Cricle from "./Cricle";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0,
    };
    this.interval = null;
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      currentCount: this.props.number,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.setPaused(true);
  }

  countDown = () => {
    const { paused, number } = this.props;
    const currentCount = this.state.currentCount;
    console.log(paused);

    if (currentCount > 0) {
      this.setState({
        currentCount: currentCount - 1,
      });
    } else {
      clearInterval(this.interval);
    }
    if (currentCount === 0) {
      this.setPaused(true);
    }
  };
  startTimer = () => {
    this.interval = setInterval(this.countDown, 1000);
    this.setPaused(false);
  };
  stopTimer = () => {
    clearInterval(this.interval);
    this.setPaused(true);
  };
  setPaused = (value) => {
    this.props.setPaused(this.props.index, value);
  };
  render() {
    const { paused } = this.props;
    return (
      <div className="countdown flex flex-center-align flex-column">
        <Control
          paused={paused}
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
        />
        <Cricle
          color={this.props.color}
          size={this.props.size}
          currentCount={this.state.currentCount}
        />
      </div>
    );
  }
}

export default CountDown;
