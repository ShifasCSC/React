import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './pages/Nav'

function App() {
  let [search,setSearch]=useState("")

  return (
    
   <BrowserRouter>
   <Nav setElement={setSearch}/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   </BrowserRouter>
    
  )
}

export default App
