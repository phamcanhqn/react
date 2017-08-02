import React, {Component} from 'react';
import './IncrementDecrementForm.css';

function IncrementDecrementButton(props) {
  return (
    <div className='button'>
      <button onClick={props.handleDecrementClick}> &#45; </button>
      <button onClick={props.handleIncrementClick}> &#43; </button>
    </div>
  );
}

function NumberResult(props) {
  return (
    <span className='number-result'>{props.numberResult}</span>
  );
}

class IncrementDecrementForm extends Component {
  constructor(props) {
    super(props);

    this.state = {result: 0};
  }

  handleIncrementButtonClick = () => this.setState(preState => ({result: preState.result + 1}))

  handleDecrementButtonClick = () => this.setState(preState => ({result: preState.result - 1}))

  render() {
    return (
      <fieldset className='wrapper-content'>
        <legend className='legend-title'>Increment/Decrement Application</legend>
        <NumberResult
          numberResult={this.state.result} />
        <IncrementDecrementButton
          handleIncrementClick={this.handleIncrementButtonClick}
          handleDecrementClick={this.handleDecrementButtonClick} />
      </fieldset>
    );
  }
}

export default IncrementDecrementForm;
