import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Edit from "./Components/Edit/Edit"
import Home from './Components/Home/Home'
import Create from './Components/Create/Create'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/:_id' element={<Edit/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App