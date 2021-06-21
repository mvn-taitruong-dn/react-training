import React, { Component } from "react";

class Item extends Component {
  handleRemoveItem(index) {
    this.props.handleRemoveItem(index);
  }

  render() {
    const { item, index } = this.props;
    const style = { backgroundColor: item.color };
    return (
      <li className="item">
        <span className="item-background" style={style}></span>
        <div className="item-content">
          <h3 className="item-title">{item.title}</h3>
          <p className="item-subTitle">{item.subTitle}</p>
        </div>
        <i className="ic-delete" onClick={() => this.handleRemoveItem(index)}>
          X
        </i>
      </li>
    );
  }
}

export default Item;
