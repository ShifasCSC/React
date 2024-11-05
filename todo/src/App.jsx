import React,{Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      inputVal:"",
      item:[]
    }
  }
  handleInput=(event)=>{
    this.setState({inputVal:event.target.value})
  }
  addItem=()=>{
    this.setState({item:[...this.state.item,this.state.inputVal],inputVal:""})
  }
render(){
  console.log(event);
  
  return(
    <>
    <div>
    <input type="text" onChange={this.handleInput} value={this.state.inputVal}/>
    <button>submit</button>
    </div>
    <div>
      <ul>
        {
             this.state.item.map((item,index)=><li key={index}>{item}</li>)
        }
    </ul>
    </div>
    </>
  )
      
}
}

 


export default App
