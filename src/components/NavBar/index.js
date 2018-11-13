import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.logout} className="button">
            Log out
        </button>
        <br />
        <br />
    </div>
);
  }
}

export default NavBar;
