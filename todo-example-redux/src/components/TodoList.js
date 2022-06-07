import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
	const handleTodoClick = (id) => {
		props.handleTodoClick(id)
	}

	return (
		<ul>
			{
				props.todos.map((todo) =>
					<Todo
						key={todo.id}
						{...todo}
						handleClick={handleTodoClick.bind(null, todo.id)}
					/>
				)
			}
		</ul>
	)
}

export default TodoList