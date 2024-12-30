import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Email from './Components/Email/Email'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'


function App() {
  const [user,setUser]=useState("")
 
  return (
    <>
   <BrowserRouter>
   {user && <Nav user={user} setUser={setUser} />}
   <Routes>
    <Route path='/signup' Component={SignUp}/>
    <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
    <Route path='/email' Component={Email}/>
    <Route path='/signin' Component={SignIn}/>
    <Route path='/' element={<Home setUser={setUser}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
