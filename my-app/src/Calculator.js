import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const valueInput = parseFloat(temperature);

	if (Number.isNaN(valueInput)) {
		return '';
	}

	const valueOutput = Math.round(convert(valueInput) * 1000) / 1000;

	return valueOutput.toString();

}

function BoilingVerdict(props) {
	if (props.celsius) {
		return <p>The water would boil.</p>;
	}

	return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
	handleChange =
		(event) =>
			this.props.onTemperatureChange(event.target.value)

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;

		return (
			<fieldset>
				<legend> Enter temperature in {scaleNames[scale]}:</legend>
				<input
					value={temperature}
					onChange={this.handleChange} />
			</fieldset>
		);
	}
}


class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {temperature: '', scale: 'c'};
	}

	handleCelsiusChange = ((temperature) => this.setState({scale:'c', temperature}));
	handleFahrenheitChange = ((temperature) => this.setState({scale:'f', temperature}));

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit= scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
			<div>
				<TemperatureInput
					temperature={celsius}
					scale='c'
					onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput
					temperature={fahrenheit}
					scale='f'
					onTemperatureChange={this.handleFahrenheitChange} />
			</div>
		);
	}
}

export default Calculator;