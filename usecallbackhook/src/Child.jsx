import React, { memo } from "react";

const Child=({todos,addTodo})=>{
    return(
        <>
        <h2>todo</h2>
        <button onClick={addTodo}>addtodo</button>
        {todos.map((todo,ind)=><p key={ind}>{todo}</p>)}
        </>
    )
}
export default memo(Child)