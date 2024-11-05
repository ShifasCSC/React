import Labels from "./Labels"
import Layers from "./Layers"

function Sections({title,paar,isActive}){
  
    return(
      <div className="section">
          <h1>{title}</h1>
          <p>{paar}</p>
          <Labels onActive={()=>alert("my team")} isActive={isActive}/>
           <Layers />
          <hr />
          <br /><hr /><br />
        </div>
    )
  }
  export default Sections