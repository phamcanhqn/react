import React, {Component} from 'react';

import IncrementDecrementButton from './IncrementDecrementButton';
import NumberResult from './NumberResult';

import './IncrementDecrementForm.css';

class IncrementDecrementForm extends Component {
  constructor(props) {
    super(props);

    this.state = {result: 0};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.result < 0) {

      //this.setState({result: 0});

      return false;
    }

    return true;
  }

  handleIncrementButtonClick = () => this.setState(preState => ({result: ++preState.result}))

  handleDecrementButtonClick = () => this.setState(preState => ({result: --preState.result}))

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
