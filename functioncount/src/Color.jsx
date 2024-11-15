import { useState } from "react";

function Color(){
    let[count,setCount]=useState(true)

    function funs(){
     setCount(!count)   
    }
    console.log(count);
    

    return(
        <>
        <button onClick={funs} style={count?{backgroundColor:"green"}:{backgroundColor:"red"}}>clickme</button>
        </>
    )
}
export default Color