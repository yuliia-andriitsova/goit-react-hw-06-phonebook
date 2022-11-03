import PropTypes from 'prop-types';
import { ContactItem } from './ContactItem';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            DeleteContact={onDeleteContact}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
export { ContactList };

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string,
      name: PropTypes.string,
      key: PropTypes.string,
      id: PropTypes.string,
    }).isRequired
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
