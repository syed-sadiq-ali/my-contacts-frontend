import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const { firstName, lastName, mobileNumber, email, work } = this.props.contact;
    return(
      <div>
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{`${mobileNumber}, ${email}, ${work}`}</p>
        <button>Edit</button> <span></span>
        <button>Delete</button>
      </div>
);
  }
}

export default Contact;
