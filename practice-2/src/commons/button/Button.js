import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      type="button"
      name={props.name}
      className={props.className}
      onClick={props.handleClick}>
      {props.label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired
}

export {Button};