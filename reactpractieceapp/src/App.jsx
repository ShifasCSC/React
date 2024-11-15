
import React from 'react'
import './App.css'
import Sections from './pages/Sections.jsx'


function App() {
  const data=[
    {name:"shifas",age:"21",sal:200000,isWork:true},{name:"saravana",age:22,sal:300000,isWork:false}
  ]

  return (
    <div>
      
    {
      data.map((dt,index)=><Sections key={index} name={dt.name} age={dt.age} sal={dt.sal} isWork={dt.isWork}  />) 
    }
    </div>
  )
}

export default App
