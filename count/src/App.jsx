
// import React,{Component} from  "react";

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//     count:0
//     }
//   }
//   increment=()=>{
//     this.setState({count:this.state.count+=1})
//   }
//   decrement=()=>{
//     if(this.state.count>0){
//       this.setState({count:this.state.count-=1})
//     }
//   }
//   render(){

//     return(
//     <><h1>

//     <button onClick={this.decrement}>-</button>
//     <span>Count {this.state.count} </span>
//     <button onClick={this.increment}>+</button>
//     </h1>
//     </>
//     )
//   }
// }
// export default App

// import React,{Component} from "react";

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0
//     }
//   }
//   increment=()=>{
//     this.setState({count:this.state.count+=1}
//     )}
// render(){
  
//   return(
//     <div>
//       <h1>
//         <button onClick={this.increment}><h1><span>Count {this.state.count}</span></h1></button>
//       </h1>
//     </div>
//   )
// }
// }
// export default App

import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      input:"",
      value:[]
    }
  }
  HandleInput=(event)=>{
   this.setState({input:event.target.value})
  }
  Add=()=>{
    this.setState({value:[...this.state.value]})
  }
render(){
  return(
    <>
    <input type="text" onChange={this.HandleInput} />
    <button>click</button>
    </>
  )
}
}
export default App