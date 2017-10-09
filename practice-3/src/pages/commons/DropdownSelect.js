import React from 'react'
import PropTypes from 'prop-types'

import './styles/DropdownSelect.css'

const DropdownSelect = props => {
  /**
   * Handle change action on dropdown
   * Check required and highlight if don't have value
   * @param event
  */
  const handleChange = event => {
    if (!props.isRequired) return
    
    let target = event.target

    if (!target.value) {
      target.classList.add('input-error')
    } else {
      target.classList.remove('input-error')
    }
  }
  
  /**
   * @return {Object} Dropdown control
  */
  return (
    <select
      defaultValue={props.value}
      ref={props.selectRef}
      name={props.name}
      onChange={handleChange}
      className={props.className}
    >
      <option value=""> --Select-- </option>
      {
        props.options.map(option => {
          return (
            <option
              value={option.value}
              key={option.id}
            >
              {option.label}
            </option>
          );
        })
      }
    </select>
  )
}

DropdownSelect.propTypes = {
  isRequired: PropTypes.bool,
  selectRef: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func
}

DropdownSelect.defaultProps = {
  isRequired: false,
  selectRef: null,
  handleChange: null,
  className: ''
};

export { DropdownSelect }
