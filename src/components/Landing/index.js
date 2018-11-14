import React, { Component } from 'react';

class Landing extends Component {
  render() {
    const { onSuccess } = this.props;
    return(
      <div>
        <p>Welcome to My Contacts - Now you can save all your contacts in one place</p>
        <p>Log in to view your contacts</p>
        <button onClick={onSuccess}>Log in</button>
      </div>
    );
  }
}

export default Landing;
