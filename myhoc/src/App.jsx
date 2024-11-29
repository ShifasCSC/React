import { useEffect, useState } from 'react'
import Process from './Process'
import Basecomponent from './Basecomponent'

import './App.css'
const Preloader=Process(Basecomponent)
function App() {
 const [info,setInfo]=useState([])
 const [upload,setUpload]=useState(true)
 useEffect(()=>{
setTimeout(()=>{
setInfo(["data1","data2","data3","data4","data5",])
setUpload(false)
},3000)
 },[])

  return <Preloader info={info} upload={upload} />
}

export default App
