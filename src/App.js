import React from 'react'
import Header from './components/Header'

const onClick = () => {
  alert('msg');
}

const App = () => {
  return (
    <div className='container'>
      <Header text="Task tracker" onClick={onClick} />
    </div>
  )
}

export default App