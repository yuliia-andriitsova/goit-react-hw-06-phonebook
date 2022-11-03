// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/phonebook/action';

export function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilterName = event => {
    dispatch(changeFilterAction(event.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>

      <input type="text" name="filter" onChange={onFilterName} value={filter} />
    </>
  );
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterName: PropTypes.func.isRequired,
// };
