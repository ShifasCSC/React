//todo-------------------------------------------------------------------------------------------------
import React from "react";
import './App.css'

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state={
      post:[]
    }
  }
  async componentDidMount(){
    const res=await fetch("https://jsonplaceholder.typicode.com/todos")
    const data=await res.json()
    this.setState({post:[...data]}) 
  }
render(){
  return(
    <>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>status</th>
        </tr>
      </thead>
      {this.state.post.map((dt,index)=><tbody key={index}>
        <tr>
          <td>{dt.id}</td>
          <td>{dt.title}</td>
          <td>{dt.completed?<span style={{color:"green"}}>completed</span>:<span style={{color:"red"}}>not completed</span>}</td>
        </tr>
      </tbody>)}
    </table>
    </>
  )
}
}
export default Todo
//TODO END------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------