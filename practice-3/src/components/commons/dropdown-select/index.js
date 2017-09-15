import React from 'react';
import PropTypes from 'prop-types';

import './style/DropdownSelect.css'

const DropdownSelect = props => {
  const handleChange = event => {
    if (!props.isRequired) return
    
    let target = event.target

    if (!target.value) {
      target.style.borderColor = "red"
    } else {
      target.style.borderColor = "gray"
    }
  }
  
  return (
    <select
      ref={props.selectRef}
      name={props.name}
      onChange={handleChange}
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
  selectRef: PropTypes.func,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func

}

DropdownSelect.defaultProps = {
  selectRef: null,
  handleChange: null,
  className: ''
};

export {DropdownSelect};
