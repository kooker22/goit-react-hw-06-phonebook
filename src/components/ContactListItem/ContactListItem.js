import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import styles from './ContactListItem.module.css';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as Icon } from '../../theme/icons/icon.svg';

const ContactListItem = ({ contacts, onDelete}) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        {name}: {number}
        <button
        type='button'
          className={styles.button}
          id={id}
          onClick={()=> onDelete(id)}
        >
          <Icon />
        </button>
      </li>
    ))}
  </>
);
const getVisibleContacts = (allContacts, filter) => {
  const normolizeContact = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normolizeContact),
  );
};
const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
