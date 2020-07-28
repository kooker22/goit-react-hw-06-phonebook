import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addContact } from '../../redux/phonebook/phonebook-actions';
import styles from './Form.module.css';
class Form extends Component {
  static propTypes = {
    state: propTypes.objectOf(propTypes.string.isRequired),
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.number !== '') {
      this.props.onSubmit(this.state);
      this.resetForm();
      return;
    }
    alert('enter name and number');
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.input}
            ></input>
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              className={styles.input}
            ></input>
          </label>
        </div>
        <button type="submit" className={styles.buttonForm}>
          add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToPtroms = dispatch => ({
  onSubmit: data => dispatch(addContact(data)),
});
export default connect(null, mapDispatchToPtroms)(Form);
