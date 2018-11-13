import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.logout} className="button">
            Log out
        </button>
    </div>
);
  }
}

export default NavBar;
