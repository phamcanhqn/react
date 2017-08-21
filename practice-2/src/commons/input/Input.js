import React from 'react';
import PropTypes from 'prop-types';

import './style/Input.css';

const Input = props => {
	return (
		<input
			type={props.type}
			name={props.name}
			value={props.value}
			className={props.className}
			onChange={props.handleChange}
    />
	);
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number
    ]
  ),
  className: PropTypes.string,
  handleChange: PropTypes.func

}

Input.defaultProps = {
  type:'text',
  value: '',
  handleChange: null,
  className: ''
};

export {Input};
