import React from 'react';
import PropTypes from 'prop-types';

const DropdownSelect = props => {
  return (
      <select
        value={props.value}
        name={props.name}
        onChange={props.handleChange}
        className={props.className}>
        <option value=""> --Select-- </option>
        {
          props.options.map(option => {
            return (
              <option
                value={option.value}
                key={option.id}>
                {option.label}
              </option>
            );
          })
        }
    </select>
  );
};

DropdownSelect.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number
    ]
  ),
  label: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func

}

DropdownSelect.defaultProps = {
  value: '',
  handleChange: null,
  className: ''
};

export {DropdownSelect};
