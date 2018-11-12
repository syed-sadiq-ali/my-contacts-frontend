import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return(
      <div>
        <p>Welcome to My Contacts!</p>
        <p>Log in to view your contacts</p>
        <Link to="/home">
          <button>Log in</button>
        </Link>
      </div>
    );
  }
}

export default Login;
