import { useEffect, useState } from 'react'

import './App.css'
import isLoader from './hoc'
import MainComponent from './MainComponent'

const PrimaryLoader=isLoader(MainComponent)
function App() {
const [data,setData]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{
  setTimeout(()=>{
    setData(["item1","item2","item3","item4","item5"])
    setLoading(false)
  },3000)
},[])
  return <PrimaryLoader loading={loading} data={data}/>
}

export default App
