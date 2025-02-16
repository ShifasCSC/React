import React from 'react'
import "./App.css"
import TodoList from './Component/TodoList'

function App() {
  return (
    <div className="app">
      <h1>to-do list</h1>
      <TodoList/>
    </div>
  )
}

export default App