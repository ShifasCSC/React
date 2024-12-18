import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/signup' Component={SignUp}/>
    <Route path='/' Component={SignIn}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
