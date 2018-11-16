import React, { Component } from 'react';
import Contact from '../Contact';
import AddContactModal from '../AddContactModal';
import { backendUrl } from '../../constants';

class ContactList extends Component {
  constructor(){
    super();
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async addContact(contact) {
    let reqBody = JSON.stringify(contact, null, 2);
    const contactBlob = new Blob([reqBody], {type : 'application/json'});
    const access_token = this.props.accessToken;
    const myHeaders = new Headers(
      {
        'access-token': access_token,
      }
    );
    const url = `${backendUrl}/contact/`;
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: contactBlob,
    };

    await fetch(url, options)
    .then(r => r.json())
    .then(function(response){
      if(response.meta.status !== 200) {
        console.log(`Error: ${response.meta.message}`);
        alert(`Error: ${response.meta.message}`);
      }
    })
    .catch(error => console.log(error));
  }

  onSubmit = (contact) => {
    this.addContact(contact);
    this.toggleModal();
  };

  render() {
    const { contacts, deleteContact, editContact } = this.props;
    return(
      <div>
        <h2>Contacts List</h2>
        <button onClick={this.toggleModal}>New Contact</button>        
        <br />
        <br />
        
        {
          contacts && contacts.length > 0 ? contacts.map((contact, id) => {
            return <Contact
             contact={contact}
             key={id}
             deleteContact={deleteContact}
             editContact={editContact}
            />
          })
          : 'You do not have any contacts. Add one!'
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
