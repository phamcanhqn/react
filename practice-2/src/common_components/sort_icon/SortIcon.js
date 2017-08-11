import React from 'react';
import PropTypes from 'prop-types';

const SortIcon = props => {
	return (
		<span
			className={props.className}>
    </span>
	);
};

SortIcon.propTypes = {
  className: PropTypes.string
};

SortIcon.defaultProps = {
  className: ''
};

export {SortIcon};