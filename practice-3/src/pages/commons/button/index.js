import React from 'react'
import PropTypes from 'prop-types'

import './style/Button.css'

/**
 * @return {Object} button control
*/
const Button = props => (
  <button
    type={props.type}
    name={props.name}
    className={props.className}
    onClick={props.handleClick}
  >
    {props.label}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

Button.defaultProps = {
  type: 'button',
  name: '',
  className: ''
}

export { Button }
