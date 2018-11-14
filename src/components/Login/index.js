import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Home from '../Home';
import NavBar from '../NavBar';
import Landing from '../Landing';

class Login extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: ''};

    this.logout = this.logout.bind(this);
    this.googleResponse = this.googleResponse.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  googleResponse = (response) => {
    const options = {
        method: 'GET',
        // mode: 'cors',
        // cache: 'default',
    };
    fetch('http://172.16.1.3:4000/auth/google', options)
    .then(r => {
      console.log(r);
    })
    .catch(this.onFailure);
    // const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    // const options = {
    //     method: 'POST',
    //     body: tokenBlob,
    //     mode: 'cors',
    //     cache: 'default'
    // };
    // fetch('http://172.16.1.3:4000/api/v1/auth/google', options).then(r => {
    //     const token = r.headers.get('x-auth-token');
    //     r.json().then(user => {
    //         if (token) {
    //             this.setState({isAuthenticated: true, user, token})
    //         }
    //     });
    // })
    //remove the following lines once backend authentication API is running
    const user = { email: 'abc@gmail.com', name: 'Sadiq' };
    const token = 'nice_token';
    this.setState({isAuthenticated: true, user, token});
  };
  
  onFailure = (error) => {
    console.log(error);
  }

  render() {
    // !! is used to convert a value to a Boolean type, not necessary here
    let content = !!this.state.isAuthenticated ?
      (
          <div>
            <NavBar logout={this.logout}/>
            <Home />
          </div>
      ) :
      (
          <div>
            <Landing onSuccess={this.googleResponse} />
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
