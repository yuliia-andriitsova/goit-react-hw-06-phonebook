// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteAction } from 'redux/phonebook/action';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteAction(id));
    // setContacts(prevState => {
    //   return prevState.filter(item => item.id !== id);
    // });
  };

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export { ContactItem };

// ContactItem.propTypes = {
//   DeleteContact: PropTypes.func,
// };
