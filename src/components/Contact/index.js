import React, { Component } from 'react';
import EditContactModal from '../EditContactModal';
import DeleteContactModal from '../DeleteContactModal';

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      isEditOpen: false,
      isDeleteOpen: false,
    };
  }

  toggleEditModal = () => {
    this.setState({
      isEditOpen: !this.state.isEditOpen,
    });
  };

  toggleDeleteModal = () => {
    this.setState({
      isDeleteOpen: !this.state.isDeleteOpen,
    });
  };

  render() {
    const { firstName, lastName, mobileNumber, email, work } = this.props.contact;
    return(
      <div>
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{`${mobileNumber}, ${email}, ${work}`}</p>
        <button onClick={this.toggleEditModal}>Edit</button> <span></span>
        <button onClick={this.toggleDeleteModal}>Delete</button>

        <EditContactModal
          open={this.state.isEditOpen}
          onClose={this.toggleEditModal}
          contact={this.props.contact}
        />
        <DeleteContactModal
          open={this.state.isDeleteOpen}
          onClose={this.toggleDeleteModal}
        />
      </div>
);
  }
}

export default Contact;
