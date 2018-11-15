import React, { Component } from 'react';
import Contact from '../Contact';
import AddContactModal from '../AddContactModal';

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
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZWMyNWNjMTRkM2U2NDI4OGZiZDJmOCIsIm5hbWUiOiJIYW16YSBTaGFoaWQiLCJlbWFpbCI6ImFobWVkaGFtemExOTk1QGdtYWlsLmNvbSIsImlhdCI6MTU0MjI1NjA2NiwiZXhwIjoxNTQyMjkyMDY2fQ.LMn89wSYshBib2EWqVoZ5sJib2d6oZH5jRbPxtLy_eI';
    const myHeaders = new Headers(
      {
        'access-token': access_token,
      }
    );
    const url = `http://172.16.1.3:4000/contact/`;
    const options = {
      method: 'POST',
      headers: myHeaders,
      body: contactBlob,
    };

    await fetch(url, options)
    .then(r => r.json())
    .then(r => {
      // console.log(r);
    } )
    .catch(error => console.log(error));
  }

  onSubmit = (contact) => {
    this.addContact(contact);
    this.props.someHandler();
    this.toggleModal();
  };

  render() {
    const { contacts, deleteContact, editContact, someHandler } = this.props;
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
             editContact={editContact}
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
