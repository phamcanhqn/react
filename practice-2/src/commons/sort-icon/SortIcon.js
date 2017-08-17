import React from 'react';
import PropTypes from 'prop-types';

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
