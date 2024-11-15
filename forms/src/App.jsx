import React from "react";
class App extends React.Component{
  state={
    name:"",
    age:""
  }
  onHandleChange=(e)=>{
   this.setState({[e.target.name]:e.target.value})
  }
  // onHandleChange1=(e)=>{
  //  this.setState({name:e.target.value})
  //  console.log(this.state.name);
   
   
  // }
  // onHandleChange2=(e)=>{
  //  this.setState({age:e.target.value})
  //  console.log(this.state.age);
   
   
  // }
  onSubmitted=(e)=>{
   e.preventDefault()
   console.log(this.state.name,this.state.age);
   alert(this.state.name,this.state.age)
   
  }
render(){
  return(
    <form action="">
      <input type="text" name="name" placeholder="name" onChange={this.onHandleChange} />
      <input type="text" name="age" placeholder="age" onChange={this.onHandleChange} />
      <button onClick={this.onSubmitted}>sub</button>
    </form>
  )
}
}
export default App