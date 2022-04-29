import Header from "./components/Header"
import Input from "./components/Input"
import { useState, useEffect } from "react"
import TaskList from "./components/TaskList"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import TaskListDone from "./components/TaskListDone"

const App = () => {
  const [tasks, setTask] = useState([])

  useEffect (() => {
    const getTasks = async() => {
      const taskServer = await fetchTasks()
      setTask(taskServer)
  
    }

    getTasks()
  }, [])

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:3001/tasks')
    const data = await res.json()

    return data
  }
  fetchTasks()
  
  const delTask = async(id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE' });
    const data = await res.json()

    console.log('Delete successful');
    setTask(tasks)
    return data
  }
  
  function refreshPage() {
    window.location.reload(false);
  }
 
  const addTask = async (task) => {
    const res = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTask([...tasks, data])
  }

  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`)
    const data = await res.json()

    return data
  }


  const done = async(id) => {
    const doneTask = await fetchTask(id)
    const changePro = {...doneTask, inProgress: !doneTask.inProgress}

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(changePro),
    })

    const data = await res.json()

    setTask(
      tasks.map((task) => 
        task.id === id ? {...task, inProgress: data.inProgress } : task
      )
    )
  }

  return (
    <Router>
      <section className="container">
          <Header />
          <Input onAdd={addTask} />
          {tasks.length > 0 ? <TaskList tasks={tasks} onDel={delTask} refreshPage={refreshPage} onDone={done}/> : 'NO TASK'}       
      </section>
      <Routes>
        <Route path="/" />
        <Route path="/tasklistdone" element={<TaskListDone tasks={tasks} onDel={delTask} refreshPage={refreshPage} />}/>
      </Routes>     
    </Router>
  )
}

export default App