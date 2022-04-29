import React from 'react'
import TaskDone from './TaskDone'

const TaskListDone = ({ tasks , onDel , refreshPage}) => {
  return (
    <ul className="toDoList">
        <h2 style={{textAlign:"center", justifyContent:"center", color:"IndianRed"}}>Finish Tasks</h2>
        {tasks.map((task) => (
        <TaskDone key={task.id} task={task} onDel={onDel} refreshPage={refreshPage} />))}    
        <a href='/'> close </a>    
  </ul>
  )
}

export default TaskListDone