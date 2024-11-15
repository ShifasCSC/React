import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [arr,setArr]=useState([])
  useEffect(()=>{
  getData()
  },[])
  const getData=async()=>{
    try{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts") 
    const data=await res.json()
    console.log(data);
    setArr(data)
    


    }catch(error){
      console.log(error);
      
    }
  }
 
  return (
    <>
     <ul>
      {
        arr.length!==0?arr.map((item)=><li>{item.title}</li>):<li>loading..</li>
      }
     </ul>
    </>
  )
}

export default App
