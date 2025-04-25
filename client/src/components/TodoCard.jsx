import React from 'react'
import ProgressTile from './ProgressTile'

const TodoCard = () => {
  return (
    <div>
            <ProgressTile name={"Login Page"} time={"00:10:00"} value={10} />
            <ProgressTile name={"Project Ten"} time={"00:20:00"} value={23} />
            </div>
  )
}

export default TodoCard