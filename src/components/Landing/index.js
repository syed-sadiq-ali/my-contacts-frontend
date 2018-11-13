import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

class Landing extends Component {
  render() {
    const { onSuccess, onFailure } = this.props;
    return(
      <div>
        <p>Welcome to My Contacts!</p>
        <p>Log in to view your contacts</p>
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
