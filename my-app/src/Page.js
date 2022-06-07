import React from 'react';

function WarningBanner(props) {
	if (props.warn) {
		return null;
	}

	return (
		<div>
			Warning!
		</div>
	);
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showWarning: true};
	}

	handleToggleClick = () => (
		this.setState({
			showWarning: !this.state.showWarning
		})
	)

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}

export default Page;