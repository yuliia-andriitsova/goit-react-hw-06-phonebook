import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

const App = () => {
  // const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
      <PhoneBook />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };
