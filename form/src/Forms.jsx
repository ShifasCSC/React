import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form action="">
             <input type="text" name="name" placeholder="name" onChange={this.valueInput} />
             <input type="text" name="age" placeholder="age" onChange={this.valueInput} />
             <input type="text" name="address" placeholder="address" onChange={this.valueInput} />
             <input type="text" name="blood" placeholder="blood" onChange={this.valueInput} />
             <input type="text" name="cast" placeholder="cast" onChange={this.valueInput} />
             <input type="text" name="country" placeholder="country" onChange={this.valueInput} />
             <input type="text" name="state" placeholder="state" onChange={this.valueInput} />
             <input type="text" name="district" placeholder="district" onChange={this.valueInput} />
             <input type="text" name="place" placeholder="place" onChange={this.valueInput} />
             <input type="text" name="pincode" placeholder="pincode" onChange={this.valueInput} />
             <button onClick={this.handleSubmit}>sub</button>
            </form>
        )
    }
}
export default Form