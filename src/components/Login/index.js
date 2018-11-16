import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Home from '../Home';
import NavBar from '../NavBar';
import Landing from '../Landing';
import { backendUrl } from '../../constants'

class Login extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, accessToken: ''};

    this.logout = this.logout.bind(this);
    this.googleResponse = this.googleResponse.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  logout = () => {
    this.setState({isAuthenticated: false, accessToken: '', user: null})
  };

  googleResponse = (response) => {
    const { googleId, email, name } = response.profileObj;
    const reqBody = {
      name,
      socialId: googleId,
      email,
    };
    const reqBlob = new Blob([JSON.stringify(reqBody, null, 2)], { type: 'application/json' });
    const options = {
        method: 'POST',
        body: reqBlob,
    };
    fetch(`${backendUrl}/user/`, options)
    .then(r => r.json())
    .then(response => {
      const { accessToken } = response.data;
      if(accessToken) {
        const user = {
          email,
          name,
        };
        this.setState({ isAuthenticated: true, user, accessToken: accessToken });
      }
    })
    .catch(e => console.log(e));
  };
  
  onFailure = (error) => {
    console.log(error);
  }

  render() {
    let content = this.state.isAuthenticated ?
      (
          <div>
            <NavBar user={this.state.user} logout={this.logout}/>
            <Home accessToken={this.state.accessToken} />
          </div>
      ) :
      (
          <div>
            <Landing onSuccess={this.googleResponse} onFailure={this.onFailure} />
          </div>
      );

      return(
      <div>
        {content}
      </div>
    );
  }
}

export default Login;
