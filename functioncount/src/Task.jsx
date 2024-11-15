import { useState } from "react";
function Task(){
 //here the count is used to read and setCount is used to write the data 
  //the useState is the hook that is used to initialize it
  let[count,setCount]=useState (0)

  function increment(){
    setCount(count+=1)
  }

  return (
    <>
    <button onClick={increment}>count{count}</button>
    </>
  )
}

export default Task