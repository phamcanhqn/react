import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispactchToProps = (dispatch, ownProps) => ({
	handleClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	}
})

const FilterLink = connect(
	mapStateToProps,
	mapDispactchToProps
)(Link)

export default FilterLink