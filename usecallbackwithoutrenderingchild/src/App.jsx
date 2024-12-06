import { useCallback, useState } from 'react'
import Child from "./Child"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber]=useState([1,2,3,4,5])
  const HandleData=useCallback(()=>{
    setNumber((pre)=>([...pre,pre.length+1]))
  },[]) //to render without child
  // },[number]) to render the child

  const Increment=()=>{
    setCount(count+1)
  }
console.log("parent");
  return (
    <>
      <div>
       <h2>Count={count}</h2>
       <button onClick={Increment}>+</button>
       <Child addData={HandleData}/>

       <ul>
        {
          number.map((num,ind)=><li key={ind}>{num}</li>)
        }
       </ul>
       </div>
    </>
  )
}

export default App
