import React, { Component } from 'react';

class Landing extends Component {
  render() {
    const { onSuccess } = this.props;
    return(
      <div>
        <h1>Welcome to My Contacts</h1>
        <h2>One place for all your contacts</h2>
        <br />
        <br />
        <h3>Log in to view your contacts</h3>
        <button onClick={onSuccess}>Log in</button>
      </div>
    );
  }
}

export default Landing;
