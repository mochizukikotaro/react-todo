import React, { Component } from 'react'
import TodoList from './TodoList'

export default class App extends Component {
  constructor(props) {
  super(props)
  this.state = {todos: []}
  }
  componentDidMount() {
    this.setState({todos: [
      {createdAt: '2018-04-04', name: "デザインの勉強"},
      {createdAt: '2018-04-04', name: "美味しい日本酒を飲む"},
      {createdAt: '2018-04-04', name: "ワインについて勉強"}
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
