import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';
// import { GoogleLoginButton } from 'react-social-login-buttons';

class Landing extends Component {
  render() {
    const { onSuccess, onFailure } = this.props;
    return(
      <div>
        <p>Welcome to My Contacts - Now you can save all your contacts in one place</p>
        <p>Log in to view your contacts</p>
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
        >
          {/* <GoogleLoginButton /> */}
        </GoogleLogin>
      </div>
    );
  }
}

export default Landing;
