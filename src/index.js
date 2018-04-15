import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TodoApp extends Component {
  render () {
    const todos = [
      {name: 'hoge'},
      {name: 'piyo'}
    ]
    return (
      <TodoList todos={todos} />
    )
  }
}

const TodoList = (props) => {
  return (
    <table>
      <tr><th>やること</th></tr>
      {props.todos.map((todo) =>
        <TodoItem todo={todo} key={todo.name} />
      )}
    </table>
  )
}
TodoList.propTypes = {
  todos: PropTypes.array
}

const TodoItem = (props) => {
  const name = props.todo.name
  return (
    <tr>
      <td>{name}</td>
    </tr>
  )
}
TodoItem.propTypes = {
  todo: PropTypes.object
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)
