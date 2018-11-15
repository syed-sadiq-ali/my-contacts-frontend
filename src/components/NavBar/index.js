import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const { user, logout } = this.props;
    return(
      <div>
        <p>Hello, <strong>{user.name}!</strong></p>
        <button onClick={logout}>
            Log out
        </button>
        <br />
        <br />
    </div>
);
  }
}

export default NavBar;
