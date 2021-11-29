import React from "react";
import PropTypes from 'prop-types';
import { MyLabel } from "./Filter.styled";
import { isFilter } from '../../redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';


function Filter () {
  const value = useSelector(isFilter);
  const dispatch = useDispatch();

  return (
    <MyLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => dispatch
          (filterContact(e.target.value))}
      />
    </MyLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
