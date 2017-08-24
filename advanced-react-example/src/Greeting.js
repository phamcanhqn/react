import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
	render() {
		return (
			<h1>Hello, {this.props.name}</h1>
		);
	}
}

Greeting.propTypes = {
	//name: PropTypes.string
	name: PropTypes.any.isRequired
};

Greeting.defaultProps = {
	name: 'React'
};

export default Greeting;