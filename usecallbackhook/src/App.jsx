import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  let [count, setCount] = useState(0)
  const [todos,setTodo]=useState([])

  const addTodo=useCallback(()=>{
    setTodo((pre)=>[...pre,"New Task"])
  })

  const increment=()=>{
    setCount(count=count+1)
  }

  return (
    <>
      <h2>counter{count}</h2>
      <button onClick={increment}>increment</button>
      <br />
      <hr />
      <Child todos={todos} addTodo={addTodo}/>

      
    </>
  )
}

export default App
