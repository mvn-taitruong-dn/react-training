import Cricle from "./Cricle";

import React, { Component } from "react";
import CountDown from "./CountDown";
import Navigate from "./Navigate";

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

  render() {
    const { cricles, currentPage } = this.state;
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

    return (
      <main className="page-main">
        <div className="container">
          <div className="main-content flex flex-center flex-column">
            <Navigate selectPage={this.selectPage} />
            <div className="flex">
              {currentPage === "home" ? elemnetCricles : aboutPage}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
