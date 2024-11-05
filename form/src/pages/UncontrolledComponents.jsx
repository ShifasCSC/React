import React from "react";
 
class Component extends React.Component{
    constructor(props){
        super(props)
        this.inputname=React.createRef()
        this.inputage=React.createRef()
    }
    subimtVal=(e)=>{
        e.preventDefault()
        console.log(this.inputname.value);
        console.log(this.inputage.value);
        console.log("hi");
        
        
    }
    render(){
        return(
            <form action="">
                <input type="text" name="name" placeholder="name" ref={input=>this.inputname=input} />
                <input type="text" name="age" placeholder="age" ref={input=>this.inputage=input} />
                <button onClick={this.subimtVal}>submit</button>
            </form>
        )
    }
}
export default Component