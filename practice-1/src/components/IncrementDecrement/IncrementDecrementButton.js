import React from 'react';

class IncrementDecrementButton extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='button'>
        <button onClick={this.props.handleDecrementClick}> &#45; </button>
        <button onClick={this.props.handleIncrementClick}> &#43; </button>
      </div>
    );
  }
}

export default IncrementDecrementButton;
