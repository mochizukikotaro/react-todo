import React from 'react'
import PropTypes from 'prop-types'

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

export default TodoItem
