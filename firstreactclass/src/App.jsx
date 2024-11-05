
import React from 'react'
import './App.css'
import Sections from './pages/Sections'
import Tools from './pages/Tools'
const data=[
  {
    title:"song",
    para:"song in modd",
    isActive:false
  },
  {
    title:"Movies",
    para:"best ever in this industry",
    isActive:true
  },
  {
    title:"Novels",
    para:"best novels in this era",
    isActive:true
  }
]
class App extends React.Component {
  //states are used to read,write,update the data 
  //it is mainly used to alternativly edit data
  constructor(props){
    super(props);
    this.state={
      arr:data
    }
  }
  // const ls=["apple","orange","banana"]

  render(){
const onListChange=(event)=>{
  console.log(event.target.value);
  let newList=data.filter((dt)=>{
    if(event.target.value==="all"){
       return true
    }
    if(event.target.value==="active"){
      return dt.isActive==true
    }
    if(event.target.value==="inactive"){
      return dt.isActive==false
    }

  })
  this.setState({arr:newList});
  
}
    
    return (
      <Tools onAction={onListChange}>
      <div>
      {
       this.state.arr.map((dt,index)=><Sections key={index} title={dt.title} paar={dt.para} isActive={dt.isActive}  />)
      }
      {/* <ul>
        {ls.map((lsa)=>{
          return <li>{lsa}</li>
          })}
          </ul> 
      <ul>
      {ls.map((fruits)=><li>{fruits}</li>)}
     </ul> */}
     </div>
     </Tools>
    )
  }
 }
    

  


export default App
