import React, { Component } from 'react';
import EditContactModal from '../EditContactModal';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { firstName, lastName, mobileNumber, email, work } = this.props.contact;
    return(
      <div>
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{`${mobileNumber}, ${email}, ${work}`}</p>
        <button onClick={this.toggleModal}>Edit</button> <span></span>
        <button>Delete</button>

        <EditContactModal
          open={this.state.isOpen}
          onClose={this.toggleModal}
          contact={this.props.contact}
        />

      </div>
);
  }
}

export default Contact;
