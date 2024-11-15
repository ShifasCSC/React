import { useState } from "react";
function Visible(){
    let[visible,setCount]=useState(true)
    function sub(){
        setCount(!visible)
    }
return(
    <>
    <div className="visible" id="visible" style={visible?{display:"inline"}:{display:"none"}}><h1>hlo!</h1></div>
    <button onClick={sub}>ok</button>
    </>
)
}
export default Visible