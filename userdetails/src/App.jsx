import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Nav from './Pages/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [search,setSearch]=useState("")

  return (
    <BrowserRouter>
    <Nav setState={setSearch}/>
    <Routes>
      <Route path='/' element={<Home search={search}/>}/>
      <Route path='/details/:id' Component={Details}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
