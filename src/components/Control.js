import React, { Component } from "react";

class Control extends Component {
  handleStop = () => {
    if (this.props.paused) {
      this.props.startTimer();
    } else {
      this.props.stopTimer();
    }
  };

  render() {
    const { paused } = this.props;
    const styles = { backgroundColor: paused ? "green" : "red" };
    return (
      <button type="button" style={styles} onClick={() => this.handleStop()}>
        {this.props.paused ? "start" : "stop"}
      </button>
    );
  }
}

export default Control;
