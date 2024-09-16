import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/NewPost'

function App() {
  return (
    <div className="App">
        <TaskList />
    </div>
  )
}

export default App