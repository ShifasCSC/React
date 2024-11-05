import React from "react";

class Labels extends React.Component{
  onLabelClick(){
    alert("hello")
  }
  render(){
    const {isActive,onActive}=this.props;
    const style=isActive?{backgroundColor:"green"}:{backgroundColor:"red"}
    return(
        //<span>{this.props.isActive?"Active":"Not Active"}</span>
        <span onClick={onActive} style={style}>{isActive?"Active":"Not Active"}</span>
    )
  }
}
export default Labels;