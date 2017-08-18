import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
	return (
		<input
			type="text"
			name={props.name}
			value={props.value}
			className={props.className}
			onChange={props.handleChange} />
	);
};

Input.propTypes = {
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
  value: '',
  handleChange: null,
  className: ''
};

export {Input};
