//Core
import React, { Component } from 'react';
import 'modern-normalize/modern-normalize.css';

//Components
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';

class Phonebook extends Component {

  render() {
    return (
      <>
        <div className="container">
          <h1 className="contents">Phonebook</h1>
          <div className="wrapper">
            <Form/>
            <Filter />
          </div>
          <ContactList />
        </div>
      </>
    );
  }
}

export default Phonebook;
