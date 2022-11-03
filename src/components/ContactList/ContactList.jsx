// import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// import { deleteAction } from 'redux/phonebook/action';
import { ContactItem } from './ContactItem';

const ContactList = () => {
  // const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // const onDeleteContact = id => {
  //   dispatch(deleteAction(id));
  //   // setContacts(prevState => {
  //   //   return prevState.filter(item => item.id !== id);
  //   // });
  // };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <ul>
        {filteredContacts().map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            // DeleteContact={onDeleteContact}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
export { ContactList };

// ContactList.propTypes = {
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       number: PropTypes.string,
//       name: PropTypes.string,
//       key: PropTypes.string,
//       id: PropTypes.string,
//     }).isRequired
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
