import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Home from '../Home';
import NavBar from '../NavBar';
import Landing from '../Landing';

class Login extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, accessToken: ''};

    this.logout = this.logout.bind(this);
    this.googleResponse = this.googleResponse.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };

  googleResponse = (response) => {
    // const options = {
    //     method: 'GET',
    // };
    // fetch('http://172.16.1.3:4000/auth/google')
    // .then(r => {
    //   console.log(r);
    // })
    // .catch(this.onFailure);
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
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZWMyNWNjMTRkM2U2NDI4OGZiZDJmOCIsIm5hbWUiOiJIYW16YSBTaGFoaWQiLCJlbWFpbCI6ImFobWVkaGFtemExOTk1QGdtYWlsLmNvbSIsImlhdCI6MTU0MjI1NjA2NiwiZXhwIjoxNTQyMjkyMDY2fQ.LMn89wSYshBib2EWqVoZ5sJib2d6oZH5jRbPxtLy_eI';
    this.setState({isAuthenticated: true, user, accessToken});
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
