import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
