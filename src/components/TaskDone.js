import React from 'react'

const TaskDone = ({ task, onDel, refreshPage, onDone}) => {
  if (task.inProgress[0] !== true) {
    return (
      <div>
        <h3 style={{textDecoration: 'line-through'}}>{task.text} <button style={{borderRadius: 60, justifyContent: 'right', display: 'table-column', marginBottom: 20, marginRight: 10}} onClick={() => {onDel(task.id);refreshPage();}}>Del</button></h3>
        </div>
    )
  } else {
      return (
        null
      )
  }
 
}

export default TaskDone