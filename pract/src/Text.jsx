import React from "react";
 
class Text extends React.Component{
    constructor(props){
     super(props)
     this.state={
        count:0
    }
    }
   
    increment=()=>{
        this.setState({count:this.state.count+=1})
    }
    render(){
        return(
            <>
            <button onClick={this.increment}>count{this.state.count}</button>
            </>
        )
    }
}
export default Text