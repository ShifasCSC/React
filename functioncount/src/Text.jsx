
// TO DISPLAY SINGLE INPUT VALUE
import { useState } from "react";

function Text(){
    let[text,setText]=useState("")
   
    return(
        <>
        <input type="text" placeholder="name" onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>console.log(text)}>log</button>
        </>
    )
}
export default Text

//TO DISPLAY INPUT DATA FROM MORE THREE INPUT
// import { useState } from "react";
// function Texts(){
//     let[text,setText]=useState({
//         name:"",
//         age:"",
//         mark:0

//     })
//     const Handle=(e)=>{
//         console.log(e.target.value);
//         setText=(pre=>({...pre,[e.target.name]:e.target.value}))
        
        
//     }
//     return(
//         <>
//         <input type="text" name="name" placeholder="name" onChange={Handle} />
//         <input type="text" name="mark" placeholder="mark" onChange={Handle} />
//         <input type="text" name="age" placeholder="age" onChange={Handle} />
//         <button onClick={()=>console.log(text)}>display</button>
//         </>
//     )
// }
// export default Texts

