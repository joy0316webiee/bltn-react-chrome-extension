import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

// Components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
