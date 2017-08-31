import React from 'react'
import PropTypes from 'prop-types'

const Link = (props) => {
	if (props.active) {
		return <span>{ props.children }</span>
	}

	const handleClick = (e) => {
		e.preventDefault()
		props.handleClick()
	}

	return (
		<a
			href="#"
			onClick={ handleClick }
		>
			{ props.children }
		</a>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default Link