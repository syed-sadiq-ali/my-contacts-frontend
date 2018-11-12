import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Login} />
      </Router>
    );
  }
}

export default App;
