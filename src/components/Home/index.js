import React, { Component } from 'react';
import ContactList from '../ContactList';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      contacts: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.someHandler = this.someHandler.bind(this);
  }

  componentDidMount() {
    this.getContacts();
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

  async getContacts() {
    console.log('Get contacts')
    let contacts = [];
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZWMyNWNjMTRkM2U2NDI4OGZiZDJmOCIsIm5hbWUiOiJIYW16YSBTaGFoaWQiLCJlbWFpbCI6ImFobWVkaGFtemExOTk1QGdtYWlsLmNvbSIsImlhdCI6MTU0MjI1NjA2NiwiZXhwIjoxNTQyMjkyMDY2fQ.LMn89wSYshBib2EWqVoZ5sJib2d6oZH5jRbPxtLy_eI';
    const myHeaders = new Headers(
      {
        'access-token': access_token,
      }
    );
    const url = 'http://172.16.1.3:4000/contact/';
    const options = {
      method: 'GET',
      headers: myHeaders,
      cache: 'no-store',
    };

    await fetch(url, options)
    .then(r => r.json())
    .then(r => {
      contacts = r.data.contacts;
      console.log(contacts);
    } )
    .catch(error => console.log(error));

    this.setState({
      ...this.state,
      contacts,
    });
    console.log(this.state.contacts);
  }

  async deleteContact(contact_id) {
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZWMyNWNjMTRkM2U2NDI4OGZiZDJmOCIsIm5hbWUiOiJIYW16YSBTaGFoaWQiLCJlbWFpbCI6ImFobWVkaGFtemExOTk1QGdtYWlsLmNvbSIsImlhdCI6MTU0MjI1NjA2NiwiZXhwIjoxNTQyMjkyMDY2fQ.LMn89wSYshBib2EWqVoZ5sJib2d6oZH5jRbPxtLy_eI';
    const myHeaders = new Headers(
      {
        'access-token': access_token,
      }
    );
    const url = `http://172.16.1.3:4000/contact/${contact_id}`;
    const options = {
      method: 'DELETE',
      headers: myHeaders,
    };

    await fetch(url, options)
    .then(r => r.json())
    .then(r => {
      console.log(r);
    } )
    .catch(error => console.log(error));
  }

  async editContact(contact) {
    let reqBody = JSON.stringify(contact, null, 2);
    const contactBlob = new Blob([reqBody], {type : 'application/json'});
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZWMyNWNjMTRkM2U2NDI4OGZiZDJmOCIsIm5hbWUiOiJIYW16YSBTaGFoaWQiLCJlbWFpbCI6ImFobWVkaGFtemExOTk1QGdtYWlsLmNvbSIsImlhdCI6MTU0MjI1NjA2NiwiZXhwIjoxNTQyMjkyMDY2fQ.LMn89wSYshBib2EWqVoZ5sJib2d6oZH5jRbPxtLy_eI';
    const myHeaders = new Headers(
      {
        'access-token': access_token,
      }
    );
    const url = `http://172.16.1.3:4000/contact/${contact._id}`;
    const options = {
      method: 'PUT',
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

  someHandler() {
    this.getContacts();
  }

  render() {
    let contacts = this.state.contacts;
    contacts = this.getSearchContacts(contacts);
    return(
      <div>
        <label>Search Contacts: </label>
        <input 
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button onClick={this.someHandler}>Refresh contacts list</button>

        <ContactList
          contacts={contacts}
          deleteContact={this.deleteContact}
          editContact={this.editContact}
          someHandler={this.someHandler}
        />

        {/* <br />
        <br />
        <br />
        TODO:
        <ol>
          <li>Remove login from FE</li>
          <li>Use material UI</li>
          <li>Use redirect for routing</li>
          <li>Refactor Search Bar as a separate component</li>
          <li>API Calls</li>
          <li>Better error handling from API</li>
          <li>Code Review</li>
          <li>Handling corner cases</li>
          <li>Add Form validations</li>
          <li>Add and Edit should be the same form with conditional rendering</li>
        </ol> */}
      </div>
    );
  }
}

export default Home;
