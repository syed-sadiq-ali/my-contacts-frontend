import React, { Component } from 'react';
import ContactList from '../ContactList';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  getSearchContacts(contacts) {
    let { searchValue } = this.state;
    searchValue = searchValue.toLowerCase();
    let newContacts = [];
    for(let i=0; i<contacts.length; i++){
      let { firstName, lastName } = contacts[i];
      firstName = firstName.toLowerCase();
      lastName = lastName.toLowerCase();
      if(firstName.includes(searchValue) || lastName.includes(searchValue)) {
        newContacts.push(contacts[i]);
      }
    }
    return newContacts;
  }

  render() {
    let contacts = [
      {
        firstName: 'Sadiq',
        lastName: 'Ali',
        mobileNumber: '12345',
        email: 'abc@gmail.com',
        work: '10Pearls',
      },
      {
        firstName: 'Umar',
        lastName: 'Usman',
        mobileNumber: '0987756',
        email: 'umar@gmail.com',
        work: '10Pearls',
      }
    ];
    contacts = this.getSearchContacts(contacts);
    return(
      <div>
        <label>Search Contacts: </label>
        <input 
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />

        <ContactList contacts={contacts}/>

        <br />
        <br />
        <br />
        TODO:
        <ol>
        <li>Create New Contact Button</li>
        <li>Apply CSS</li>
        <li>Use redirect for routing</li>
        <li>Move Search Bar as a separate component</li>
        <li>API Calls</li>
        <li>Better error handling from API</li>
        <li>Code Review</li>
        </ol>
      </div>
    );
  }
}

export default Home;
