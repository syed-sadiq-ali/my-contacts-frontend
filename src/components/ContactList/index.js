import React, { Component } from 'react';
import Contact from '../Contact';
import AddContactFormModal from '../AddContactFormModal';

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

  render() {
    const { contacts } = this.props;
    return(
      <div>
        <h2>Contacts List</h2>
        <button onClick={this.toggleModal}>New Contact</button>
        <AddContactFormModal
          show={this.state.isOpen}
          onClose={this.toggleModal}
        />
        
        {
          contacts.map((contact, id) => {
            return <Contact contact={contact} key={id} />
          })
        }
      </div>
);
  }
}

export default ContactList;
