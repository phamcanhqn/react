import React from 'react';
import './NameForm.css';

class NameForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			nameValue: '',
			descriptionValue: '',
			sexValue:''
		};
	}

	handleNameChange = (event) =>
		this.setState({
			nameValue: event.target.value
		})

	handleDescriptionChange = (event) =>
		this.setState({
			descriptionValue: event.target.value
		})

	handleSexChange = (event) =>
		this.setState({
			sexValue: event.target.value
		})

	handleSubmit = (event) => {
										alert('A name was submitted: ' + this.state.value);
								  	event.preventDefault();
									}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type='text' value={this.state.nameValue} onChange={this.handleNameChange}></input>
				</label>
				<label>
					Description:
					<textarea type='text' value={this.state.descriptionValue} onChange={this.handleDescriptionChange}></textarea>
				</label>
				<label>
					Sex:
					<select value={this.state.sexValue} onChange={this.handleSexChange}>
						<option value=''>None</option>
						<option value='Male'>Male</option>
						<option value='Female'>Female</option>
					</select>
				</label>
				<span>FullName: {this.state.nameValue}</span>
				<span>Description: {this.state.descriptionValue}</span>
				<span>Sex: {this.state.sexValue}</span>
				<input type='submit' value='Submit' />
			</form>
		);
	}
}

export default NameForm;