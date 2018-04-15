import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <table>
      <tr><th>やること</th><th>作成日</th></tr>
      {props.todos.map((todo) =>
        <TodoItem todo={todo} key={todo.name} />
      )}
    </table>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array
}


export default TodoList
