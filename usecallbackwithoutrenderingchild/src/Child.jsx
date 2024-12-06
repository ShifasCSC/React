import React, { memo } from 'react'

const Child = ({addData}) => {
    console.log("child");
    
  return (
    <div>
        <button onClick={addData}>child +</button>
    </div>
  )
}

export default memo( Child)