import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = ({ match }) => {
	return (
	<div>
		<h2>Todo List</h2>
		<AddTodo />
		<VisibleTodoList filter={match.params.filter || 'SHOW_ALL'} />
		<Footer />
	</div>
)}

export default TodoApp