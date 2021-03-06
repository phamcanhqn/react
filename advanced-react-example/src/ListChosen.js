import React from 'react';
import $ from 'jquery';

class Chosen extends React.Component {
	componentDidMount() {
		this.$el = $(this.el);
		//this.$el.chosen();

		this.handleChange = this.handleChange.bind(this);
		this.$el.on('change', this.handleChange);
	}

	componentWillUnmount() {
		this.$el.off('change', this.handleChange);
		// /this.$el.chosen('destroy');
	}

	handleChange(event) {
		this.props.onChange(event.target.value)

	}

	render() {
		return (
			<div>
				<select className="Chosen-select" ref={el => this.el = el}>
					{this.props.children}
				</select>
			</div>
		);
	}
}

function ListChosen() {
  return (
    <Chosen onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}

export default ListChosen;