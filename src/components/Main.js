import Cricle from "./Cricle";

import React, { Component } from "react";
import CountDown from "./CountDown";
import Navigate from "./Navigate";
import Item from "./Item";
import FormRegister from "./FormRegister";
import UserList from "./UserList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cricles: [
        {
          color: "red",
          size: 100,
          number: 15,
          paused: true,
        },
        {
          color: "blue",
          size: 75,
          number: 10,
          paused: true,
        },
        {
          color: "yellow",
          size: 50,
          number: 20,
          paused: true,
        },
      ],
      currentPage: "home",
      items: [
        {
          color: "red",
          title: "This is title 1",
          subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          color: "yellow",
          title: "This is title 2",
          subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          color: "green",
          title: "This is title 3",
          subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          color: "blue",
          title: "This is title 4",
          subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          color: "dodgerblue",
          title: "This is title 5",
          subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
        {
          color: "hotpink",
          title: "This is title 6",
          subTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        },
      ],
    };
  }

  setPaused = (index, value) => {
    let { cricles } = this.state;
    cricles[index].paused = value;
    this.setState({
      cricles: cricles,
    });
  };
  selectPage = (page) => {
    console.log(page);
    this.setState({
      currentPage: page,
    });
  };
  handleRemoveItem = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({
      items,
    });
  };

  render() {
    const { cricles, currentPage, items } = this.state;
    const elemnetCricles = cricles.map((cricle, index) => {
      return (
        <CountDown
          key={index}
          index={index}
          paused={cricle.paused}
          color={cricle.color}
          size={cricle.size}
          number={cricle.number}
          setPaused={this.setPaused}
        />
      );
    });

    const aboutPage = (
      <div>
        <h2>About</h2>
      </div>
    );

    const elementItems = items.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          handleRemoveItem={this.handleRemoveItem}
        />
      );
    });
    const itemsPage =
      items.length === 0 ? (
        <h3>Empty Item</h3>
      ) : (
        <ul className="items">{elementItems}</ul>
      );

    return (
      <main className="page-main">
        <div className="container">
          <div className="main-content">
            <Navigate selectPage={this.selectPage} />
            <div className="flex width-100 flex-column flex-center">
              {currentPage === "home" && elemnetCricles}
              {currentPage === "about" && aboutPage}
              {currentPage === "items" && itemsPage}
              {currentPage === "forms" && <FormRegister />}
              {currentPage === "users" && <UserList />}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
