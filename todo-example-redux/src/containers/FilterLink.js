import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { Link } from 'react-router-dom'

// const mapStateToProps = (state, ownProps) => ({
// 	active: ownProps.filter === state.visibilityFilter
// })

// const mapDispactchToProps = (dispatch, ownProps) => ({
// 	handleClick: () => {
// 		dispatch(setVisibilityFilter(ownProps.filter))
// 	}
// })

const FilterLink = ({filter, children}) => (
	<Link 
		to={filter === 'SHOW_ALL' ? '/' : filter}
		activeStyle={{
			textDecoration: 'none',
      		color: 'black'
		}}
	>
		{children}
	</Link>
)
	
export default FilterLink