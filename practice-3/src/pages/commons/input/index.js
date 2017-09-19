import React from 'react';
import PropTypes from 'prop-types';

import './style/Input.css';

const Input = props => {
  /**
   * Handle blur action on textbox
   * Highlight if value of textbox is empty
   * @param event
  */
  const handleBlur = event => {
    if (!props.isRequired) return
    const target = event.target
    if(!target.value) {
      target.focus()
      target.classList.add('input-error')
    } else {
      target.classList.remove('input-error')
    }
  }

  /**
   * @return {Object} Dropdown control
  */
  return (
    <input 
      ref={props.inputRef}
      defaultValue={props.value}
			type={props.type}
			name={props.name}
			className={props.className}
			onBlur={handleBlur}
      onChange={props.handleChange}
    />
	);
};

Input.propTypes = {
  inputRef: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
}

Input.defaultProps = {
  inputRef: null,
  value: '',
  type: 'text',
  className: ''
};

export {Input};
