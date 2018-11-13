import React, { Component } from 'react';
import Contact from '../Contact';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return(
      <div>
        <h2>Contacts List</h2>
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
