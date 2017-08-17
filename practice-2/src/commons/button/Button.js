import React from 'react';
import PropTypes from 'prop-types';
import './style/Button.css'

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
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  name: '',
  className: ''
};

export {Button};
