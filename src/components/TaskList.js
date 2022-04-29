import Task from "./Task"

const TaskList = ({ tasks , onDel , refreshPage, onDone}) => {
  return (
    <div>
      <ul className="toDoList">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDel={onDel} refreshPage={refreshPage} onDone={onDone}/>))}        
      </ul>
    </div>
  )
}

export default TaskList