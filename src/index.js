import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class TodoApp extends Component {
  constructor(props) {
  super(props)
  this.state = {todos: []}
  }
  componentDidMount() {
    this.setState({todos: [
      {name: "デザインの勉強"},
      {name: "美味しい日本酒を飲む"},
      {name: "ワインについて勉強"}
    ]})
  }
  render () {
    return (
      <div>
        <h1>TodoApp</h1>
        <TodoList todos={this.state.todos} />
      </div>
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
