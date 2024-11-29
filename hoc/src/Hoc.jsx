import React from "react";

const isLoader=(NewComponent)=>{
return function isLoaderComponent({loading,...props}){
if(loading){
    return <h1>loading....</h1>
}
return <NewComponent {...props}/>
}
}
export default isLoader