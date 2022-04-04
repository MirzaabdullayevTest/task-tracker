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

  const [val, setVal] = useState({
    text: ''
  })


  // Input change
  const changeHandler = (e) => {
    setVal({ text: e.target.value })
  }

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
  const addTaskHandler = () => {
    let task = { id: tasks.length + 1, text: val.text, date: new Date(), reminder: false }

    let newTasks = tasks.concat()

    newTasks.push(task)

    setTimeout(() => {
      setTasks({ tasks: newTasks })
    }, 1000);
  }

  return (
    <div className='container'>
      <Header text="Task tracker"
        onClick={onToggleForm}
        toggleForm={toggle.toggleForm} />
      {toggle.toggleForm
        ? <Form onChange={changeHandler} addHandler={addTaskHandler} />
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