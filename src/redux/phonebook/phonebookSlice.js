import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContactAction: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },

    onDeleteContactAction: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactAction, onDeleteContactAction } =
  phonebookSlice.actions;

export default phonebookSlice.reducer;

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact:
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     // return { contacts: [...state.contacts, action.payload] };

//     case changeFilter:
//       //   return { ...state, contacts: [...state.contacts, action.payload] };
//       return { ...state, filter: action.payload };

//     case deleteContact:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
