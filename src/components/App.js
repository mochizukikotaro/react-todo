import React, { Component } from 'react'
import TodoList from './TodoList'

export default class App extends Component {
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
