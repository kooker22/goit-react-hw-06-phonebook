import React from 'react';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import {changeFilter} from '../../redux/phonebook/phonebook-actions';
const Filter = ({ value, contacts, onChange }) =>

  contacts.length > 2 && (
    
    <label>
      Contact Filter
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );

const mapStateToProps = state => ({
  value: state.phonebook.filter,
  contacts: state.phonebook.contacts,
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
