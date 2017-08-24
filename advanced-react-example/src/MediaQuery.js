import React from 'react';
import PropTypes from 'prop-types';

class MediaQuery extends React.Component {
	constructor(props) {
		super(props);

		this.state = {type: 'desktop'};
	}

	getChildContext() {
		return {type: this.state.type};
	}

	componentDidMount() {
		const checkMediaQuery = () => {
			const type = window.matchMedia("(min-width: 1025px)").media ? 'desktop' : 'mobile';

			if (type !== this.state.type) {
				this.setState({type});
			}

			window.addEventListener('resize', checkMediaQuery);

			checkMediaQuery();
		};
	}

	render() {
		return (
			<div>
				{this.state.type}
			</div>
		);
	}
}

MediaQuery.childContextTypes = {
  type: PropTypes.string
};

export default MediaQuery;