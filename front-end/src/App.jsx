
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/Home/Home'
import AddMenu from './Components/AddMenu/AddMenu'
import Menu from './Components/MenuList/Menu'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addmenu' element={<AddMenu/>}/>
      <Route path='/menu/:category' element={<Menu/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
