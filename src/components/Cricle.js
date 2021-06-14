import React, { Component } from "react";

class Cricle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorDefault: "green",
    };
  }

  render() {
    const { color, size, currentCount } = this.props;
    const { colorDefault } = this.state;
    const stytes = {
      backgroundColor: color || colorDefault,
      width: size + "px",
      height: size + "px",
      borderRadius: "50%",
      verticalAlign: "middle",
    };
    return (
      <div className="cricle flex flex-center" style={stytes}>
        {currentCount}
      </div>
    );
  }
}

export default Cricle;
