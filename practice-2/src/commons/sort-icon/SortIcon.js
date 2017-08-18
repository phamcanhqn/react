import React from 'react';
import PropTypes from 'prop-types';

import './style/SortIcon.css';

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
