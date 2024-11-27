import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Nav from './pages/Nav/Nav'
import Add from './pages/Add/Add'
import Emp from './pages/Employ/Emp'
import Edit from './pages/Add/Edit'


function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Add" Component={Add} />
      <Route path="/Emp/:_id" Component={Emp}/>
      <Route path="/Edit/:_id" Component={Edit}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
