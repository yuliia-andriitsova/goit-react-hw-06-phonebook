// import { useState } from 'react';
import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
// import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import // addContactAction,
// changeFilterAction,
// deleteAction,
'redux/phonebook/action';

const App = () => {
  // const [contacts, setContacts] = useState(init);
  // const [filter, setFilter] = useState('');

  // function init() {
  // const data = localStorage.getItem('contacts');
  // if (data) {
  //   return JSON.parse(data);
  // }
  // return [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // ];
  // }

  // const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const handleAddContact = (name, number) => {
  //   if (contacts.some(contact => contact.name === name)) {
  //     return alert(`${name} is already in contacts `);
  //   }
  //   dispatch(addContactAction({ name, number, id: nanoid() }));
  //   // setContacts(prevState => {
  //   //   return [...prevState, { name, number, id: nanoid() }];
  //   // });
  // };

  // const onFilterName = event => {
  //   dispatch(changeFilterAction(event.target.value));
  //   // const { value } = event.target;
  //   // setFilter(value);
  // };

  // const onDeleteContact = id => {
  //   dispatch(deleteAction(id));
  //   // setContacts(prevState => {
  //   //   return prevState.filter(item => item.id !== id);
  //   // });
  // };

  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
        gap: 10,
        border: '2 px solid red',
        padding: '50px',
      }}
    >
      <PhoneBook
      // onFilterName={onFilterName}
      // filter={filter}
      // handleAddContact={handleAddContact}
      />
      <h2> Contacts</h2>
      <Filter
      // filter={filter}
      // onFilterName={onFilterName}
      />

      <ContactList
      // filteredContacts={filteredContacts()}
      // onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export { App };
