import React from 'react';

function IncrementDecrementButton(props) {
  return (
    <div className='button'>
      <button onClick={props.handleDecrementClick}> &#45; </button>
      <button onClick={props.handleIncrementClick}> &#43; </button>
    </div>
  );
}

export default IncrementDecrementButton;
