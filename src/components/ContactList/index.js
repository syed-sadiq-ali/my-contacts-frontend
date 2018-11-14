import React, { Component } from 'react';
import Contact from '../Contact';
import AddContactModal from '../AddContactModal';

class ContactList extends Component {
  constructor(){
    super();
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onSubmit = (contact) => {
    console.log(contact);
    this.toggleModal();
  };

  render() {
    const { contacts, deleteContact, someHandler } = this.props;
    return(
      <div>
        <h2>Contacts List</h2>
        <button onClick={this.toggleModal}>New Contact</button>        
        {
          contacts.map((contact, id) => {
            return <Contact
             contact={contact} 
             key={id}
             deleteContact={deleteContact}
             someHandler={someHandler}
            />
          })
        }
        <AddContactModal
          open={this.state.isOpen}
          onClose={this.toggleModal}
          onSubmit={this.onSubmit}
        />
      </div>
);
  }
}

export default ContactList;
