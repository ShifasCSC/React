import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Child1 from './Child/Child1'
// import Child2 from './Child/Child2'

function App() {
  let Ch1=lazy(()=>setData(import("./Child/Child1")))
  let Ch2=lazy(()=>setData(import("./Child/Child2")))

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<h2>...loading</h2>}>
    <Routes>
      <Route path='/' element={<Ch1/>}/>
      <Route path='/Child2' element={<Ch2/>}/>
      </Routes>
    </Suspense>
      </BrowserRouter>
      
    </>
  )
}

export default App

async function setData(comp){
  await new Promise((res)=>setTimeout(res,3000))
  return comp
}
