import React from 'react';
import PropTypes from 'prop-types';

import './style/SortIcon.css';

const SortIcon = props => {
	return (
		<span
			className={props.className}>{props.characterSort}
    </span>
	);
};

SortIcon.propTypes = {
  className: PropTypes.string,
  characterSort: PropTypes.string
};

SortIcon.defaultProps = {
  className: '',
  characterSort: ''
};

export {SortIcon};
