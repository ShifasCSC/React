// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// // normal code-------------------------------------------

// class App extends React.Component {
//   state={
//     name:"",
//     age:""
//   }
//   handleChange=(e)=>{
//     e.preventDefault()
//     console.log(this.state.name,this.state.age);
  
    
//   }
//   inputVal1=(e)=>{
//  console.log(`NAME :${e.target.value}`);
//  this.setState({name:e.target.value})
 
// }
// inputVal2=(e)=>{
//     console.log(`AGE :${e.target.value}`);
//  this.setState({age:e.target.value})
 
//   }
// render(){
  
//   return (
//     <>
//     <input type="text" name='name' placeholder='name' onChange={this.inputVal1} />
//     <input type="text" name='age' placeholder='age' onChange={this.inputVal2}/>
//     <button onClick={this.handleChange}>submit</button>
    
//     </>
//   )
// }
// }

// export default App

// nORMAL CODE END----------------------------------------------

//ADVANCED TYPE------------------------------------------------
import React from "react";

class App extends React.Component{
  state={
    name:"",
    age:""
  }
  handleChange=(e)=>{
  e.preventDefault()
  console.log(this.state.name,this.state.age);
  
}
inputVal=(e)=>{
  this.setState({[e.target.name]:e.target.value})
  
  }
  render(){
    return(
      <>
      <form action="">
      <input type="text" name="name" placeholder="name" onChange={this.inputVal}/>
      <input type="text" name="age" placeholder="age" onChange={this.inputVal}/>
      <button onClick={this.handleChange}>sub</button>
      </form>
      </>
    )
  }
}
export default App