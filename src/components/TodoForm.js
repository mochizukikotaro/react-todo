import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {name: '', createdAt: ''}
  }
  onChangeName(event) {
    this.setState({name: event.target.value})
  }
  onClickSubmit() {
    this.props.add(this.state.name, (new Date()).toString())
    this.setState({name: '', createdAt: ''})
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={(event) => this.onChangeName(event)} />
        <input type="submit" value="追加" onClick={() => this.onClickSubmit()} />
      </div>
    )
  }
}
TodoForm.propTypes = {
  add: PropTypes.func.isRequired
}
