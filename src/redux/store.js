import { createStore } from 'redux';

import { contactsReducer } from './phonebook/reducers';

export const store = createStore(contactsReducer);
