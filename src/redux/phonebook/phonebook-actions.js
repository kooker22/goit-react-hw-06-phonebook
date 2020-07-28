import { createAction } from '@reduxjs/toolkit';
import uuidv4 from 'uuid';
export const addContact = createAction('phonebook/add', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));
export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter', value => ({
  payload: value,
}));
