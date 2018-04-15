import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
  }
  componentDidMount() {
    this.setState({todos: [
      {createdAt: (new Date()).toString(), name: "デザインの勉強"},
      {createdAt: (new Date()).toString(), name: "美味しい日本酒を飲む"},
      {createdAt: (new Date()).toString(), name: "ワインについて勉強"}
    ]})
  }
  addTodo(name, createdAt) {
    const todo = {name: name, createdAt: createdAt}
    this.setState({todos: this.state.todos.concat(todo)})
  }
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <TodoForm add={(name, createdAt) => this.addTodo(name, createdAt)} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
