import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, DeleteContact }) => {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => DeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export { ContactItem };

ContactItem.propTypes = {
  DeleteContact: PropTypes.func,
};

