import React from "react";

const Process=(Component)=>{
    return function ProcessComponent({upload,...props}){
        if(upload){
            return <h1>processing data ....</h1>
        }
        return <Component {...props}/>
    }

}
export default Process