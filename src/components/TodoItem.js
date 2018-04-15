import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = (props) => {
  const name = props.todo.name
  const createdAt = props.todo.createdAt
  return (
    <tr>
      <td>{name}</td>
      <td>{createdAt}</td>
    </tr>
  )
}
TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem
