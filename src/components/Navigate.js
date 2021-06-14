import React, { Component } from "react";

class Navigate extends Component {
  selectPage(page) {
    this.props.selectPage(page);
  }
  render() {
    return (
      <div className="navigator">
        <button type="button" onClick={() => this.selectPage("home")}>
          Home
        </button>
        <button type="button" onClick={() => this.selectPage("about")}>
          About
        </button>
      </div>
    );
  }
}

export default Navigate;
