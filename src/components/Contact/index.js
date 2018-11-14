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

    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
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

  handleEditSubmit(contact) {
    console.log(contact);
    this.toggleEditModal();
  }

  handleDeleteSubmit(contact) {
    this.props.deleteContact(contact._id);
    this.toggleDeleteModal();
    this.props.someHandler();
    // trigger an action to update props.contact
  }

  render() {
    const { firstName, lastName, mobileNumber, email, work, _id } = this.props.contact;
    return(
      _id &&
      <div>
        <h4>{`${firstName} ${lastName}`}</h4>
        <p>{`${mobileNumber}, ${email}, ${work}`}</p>
        <button onClick={this.toggleEditModal}>Edit</button> <span></span>
        <button onClick={this.toggleDeleteModal}>Delete</button>

        <EditContactModal
          open={this.state.isEditOpen}
          onClose={this.toggleEditModal}
          onSubmit={this.handleEditSubmit}
          contact={this.props.contact}
        />
        <DeleteContactModal
          open={this.state.isDeleteOpen}
          onClose={this.toggleDeleteModal}
          onSubmit={this.handleDeleteSubmit}
          contact={this.props.contact}
        />
      </div>
);
  }
}

export default Contact;
