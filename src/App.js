//Core
import React, { Component } from 'react';
import propTypes from 'prop-types';
import 'modern-normalize/modern-normalize.css';

//Components
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';

class Phonebook extends Component {
  static defaultProps = {
    contacts: [],
  };
  static propTypes = {
    contacts: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
      }),
    ),
    filter: propTypes.string,
  };
  
  render() {
    return (
      <>
        <div className="container">
          <h1 className="contents">Phonebook</h1>
          <div className="wrapper">
            <Form onSubmit={this.formSubmitHandler} />
            <Filter />
          </div>
          <ContactList />
        </div>
      </>
    );
  }
}

export default Phonebook;
