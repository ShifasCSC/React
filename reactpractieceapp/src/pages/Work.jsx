import React from "react";

class Status extends React.Component{
render(){
    const {isWork,Working}=this.props
    const style=isWork?{color:"green"}:{color:"red"}
    return(

        <span style={style} onClick={Working}>{isWork?"working":"notworking"}</span>
    )
}
}
export default Status