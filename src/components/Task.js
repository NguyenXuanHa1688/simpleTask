import React from 'react'

const Task = ({ task, onDel, refreshPage, onDone}) => {
  if (task.inProgress[0]) {
    return (
      <div>
        <h3>{task.text}</h3>
          <button style={{borderRadius: 60, justifyContent: 'right', display: 'table-column', marginBottom: 50, marginRight: 10}} onClick={() => {onDel(task.id);refreshPage();}}>del</button>
          <button style={{borderRadius: 60, justifyContent: 'right', display: 'table-column', marginBottom: 20}} onClick={() => {onDone(task.id)}}>Done</button>
        </div>
    )
  } else {
      return (
        null
      )
  }
 
}

export default Task