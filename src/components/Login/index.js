import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

class Login extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: ''};
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  googleResponse = (response) => {
    console.log(response);
  };
  
  onFailure = (error) => {
    alert(error);
  }

  render() {
    let content = !!this.state.isAuthenticated ?
      (
          <div>
              <p>Authenticated</p>
              <div>
                  {this.state.user.email}
              </div>
              <div>
                  <button onClick={this.logout} className="button">
                      Log out
                  </button>
              </div>
          </div>
      ) :
      (
          <div>
              <GoogleLogin
                  clientId={config.GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={this.googleResponse}
                  onFailure={this.googleResponse}
              />
          </div>
      );

      return(
      <div>
        <p>Welcome to My Contacts!</p>
        <p>Log in to view your contacts</p>
        {/* <Link to="/home">
          <button>Log in</button>
        </Link> */}
        {content}
      </div>
    );
  }
}

export default Login;
