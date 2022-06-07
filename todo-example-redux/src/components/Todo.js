import React from 'react'
import PropTypes from 'prop-types'

const Todo = (props) => {
	const handleClick = (e) => {
		e.preventDefault()
		props.handleClick()
	}
	return (
		<li
			onClick={handleClick}
			style={{
				textDecoration: props.completed ? 'line-through' : 'none'
			}}
		>
			{ props.text }
		</li>
	)
}

Todo.propTypes = {
  handleClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo