import React from 'react'

const Basecomponent = ({info}) => {
  return (
    <div>
        <h1>information</h1>
        <ol>
            {
                info.map((inf,index)=><li key={index}>{inf}</li>)
            }
        </ol>
    </div>
  )
}

export default Basecomponent