import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

class Landing extends Component {
  render() {
    const { onSuccess, onFailure } = this.props;
    return(
      <div>
        <h1>Welcome to My Contacts</h1>
        <h2>One place for all your contacts</h2>
        <br />
        <br />
        <h3>Log in to view your contacts</h3>
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    );
  }
}

export default Landing;
