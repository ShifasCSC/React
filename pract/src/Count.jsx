import { useState } from "react";

function Count(){
    let [count,setValue]=useState(0)
    let increment=()=>{
       setValue(count+=1)
    }

    return(
        <>
        <button onClick={increment}>count{count}</button>
        </>
    )
}
export default Count