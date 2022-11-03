import { addContact, deleteContact, changeFilter } from '../constants';

const initialState = {
  contacts: [],
  filter: '',
};
export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact:
      return { ...state, contacts: [...state.contacts, action.payload] };
    // return { contacts: [...state.contacts, action.payload] };

    case changeFilter:
      //   return { ...state, contacts: [...state.contacts, action.payload] };
      return { ...state, filter: action.payload };

    case deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
