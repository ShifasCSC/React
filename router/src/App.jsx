import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Nav from './Components/Nav'

function App() {
  

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
