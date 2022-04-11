import React, { useState } from 'react'
import Form from './components/Form';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Something to do', reminder: true, date: '04.04.2022' },
    { id: 2, text: 'Something to do', reminder: false, date: '08.04.2022' },
    { id: 3, text: 'Something to do', reminder: false, date: '10.04.2022' },
  ])

  const [toggle, setToggle] = useState({
    toggleForm: false
  })



  // Open To Do form
  const onToggleForm = () => {
    setToggle({ toggleForm: !toggle.toggleForm })
  }

  // Remove task
  const removeTask = (id) => {
    let filter = tasks.filter((task) => task.id !== id)
    setTasks(filter)
  }

  // Reminder 
  const reminderHandler = (id) => {
    let set = tasks.map((task) =>
      task.id === id
        ? { ...task, reminder: !task.reminder }
        : task)

    setTasks(set)
  }

  // Add task
  const addTaskHandler = (text, day, reminder) => {
    let task = { id: tasks.length + 1, text: text, date: day, reminder: reminder }

    // console.log('Task', task);
    // console.log(tasks);
    setTasks([...tasks, task])
  }

  return (
    <div className='container'>
      <Header text="Task tracker"
        onClick={onToggleForm}
        toggleForm={toggle.toggleForm} />
      {toggle.toggleForm
        ? <Form addHandler={addTaskHandler} />
        : null
      }

      {tasks.length > 0
        ? <Tasks tasks={tasks}
          onDelete={removeTask}
          onRemind={reminderHandler}
        />
        : 'Here is empty'
      }

    </div>
  )
}

export default App