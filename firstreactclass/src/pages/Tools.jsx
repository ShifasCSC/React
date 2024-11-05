import React from "react";

class Tools extends React.Component{
   render(){

       const {children,onAction}=this.props
       const onlyChild=React.Children.only(children)
       const count=React.Children.count(onlyChild.props.children)
    return(
        <>
        <div className="select" onChange={onAction}>
            <select name="" id="data">
                <option value="all">all</option>
                <option value="active">active</option>
                <option value="inactive">in active</option>
            </select>
        </div>
        {children}
        {/* this {children} is give here to display the section  */}
        <div className="count">
            total count {count}
        </div>
    </>
    )

   }
}
export default Tools;