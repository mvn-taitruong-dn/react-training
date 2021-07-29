import React, { Component } from "react";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Product from "./Product";
import AboutUs from "./AboutUs";
import ProductDetail from "./ProductDetail";

class Features extends Component {
  render() {
    return (
      <Switch>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/products">
          <Product />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
}

export default Features;
