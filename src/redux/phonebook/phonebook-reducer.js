import { combineReducers } from 'redux';
import  {addContact, deleteContact, changeFilter} from './phonebook-actions';
import { createReducer } from '@reduxjs/toolkit';


const contacts = createReducer([], {
  [addContact.type]: (state, { payload }) => [...state, payload],
  [deleteContact.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  
});
const filter = createReducer('', {
  [changeFilter.type]: (_, { payload }) => payload,
})
export default combineReducers({
  contacts,
  filter,
});

