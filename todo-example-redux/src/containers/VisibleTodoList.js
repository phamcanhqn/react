import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter( task => task.completed)
		case 'SHOW_ACTIVE':
			return todos.filter( task => !task.completed)
		default:
			throw new Error('Unknow filter: ' + filter)
	}
}

const mapStateToProps = (state, ownProps) => ({
	todos: getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = dispatch => ({
  handleTodoClick: id => {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList