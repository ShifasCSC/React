import React,{ Component } from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      product:[]
    }
  }
 async componentDidMount(){
    const res=await fetch("https://dummyjson.com/products")
    const data=await res.json()
    console.log(data.products);
    this.setState({product:[...data.products]})
    
  }
 
render(){
  return(
    <>
    <div className="nav">
      <h1>my flps</h1>
      <div className="right">
        <ul>
          <li><input type="text" placeholder='search' /></li>
          <li>home</li>
          <li>help</li>
        </ul>
      </div>
    </div>
    <div className="cards">
      
      {this.state.product.map((dt)=>{ return <div className="card">
         <div className="image">
         <img id='pic' src={dt.thumbnail} alt="" />
        </div>
        <div className="details">
        <h3>{dt.title}</h3>
        <h4>{dt.price}</h4>
        </div>
        </div>
      })}
      </div>
      
    </>
  )
}
}
export default App