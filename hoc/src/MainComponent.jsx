import React from 'react'

const MainComponent = ({data}) => {
  return (
    <div>
        <h1>data</h1>
    <ul>
        {
        data.map((dt,ind)=><li key={ind}>{dt}</li>)
         
        }
    </ul>
    </div>
  )
}

export default MainComponent