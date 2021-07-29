import React, { Component } from "react";
import Login from "./Login.js";
import { Switch, Route } from "react-router-dom";

class Auth extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Auth;
