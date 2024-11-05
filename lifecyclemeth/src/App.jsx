import React from 'react'
import './App.css'
// //post------------------------------------------------------------------------------------
class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
  async componentDidMount(){
    const res=await fetch("https://jsonplaceholder.typicode.com/posts")
    const data=await res.json()
    this.setState({posts:[...data]})
  }
  render(){
    return ( 
       <>
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUCT</th>
            <th>BODY</th>
          </tr>
        </thead>
       {this.state.posts.map((dt)=><tbody>
        <tr>
          <td>{dt.id}</td>
          <td>{dt.title}</td>
          <td>{dt.body}</td>
        </tr>
       </tbody>)}
       </table>
    </>)
  }
}
export default App
//post end---------------------------------------------------------------------------------------------


