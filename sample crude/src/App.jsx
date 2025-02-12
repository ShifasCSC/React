import {BrowserRouter,Route,Routes} from "react-router-dom"
import React from "react"
import "./App.css"
import Home from "./Components/Home/Home"
import Create from "./Components/Create/Create"
import Edit from "./Components/Edit/Edit"
function App(){
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/create" element={<Create/>} />
  <Route path="/edit/:_id" element={<Edit/>} />
</Routes>
</BrowserRouter>

  )
}
export default App