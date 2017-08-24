import React from 'react';
import PropTypes from 'prop-types';

class SingleElement extends React.Component {
	render() {
		const children = this.props.children;
		return (
			<div>
				{children}
			</div>
		);
	}
}

SingleElement.propTypes = {
	children: PropTypes.element.isRequired
}

export default SingleElement;