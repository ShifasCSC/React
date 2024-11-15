import Status from "./Work"
function Sections(props){
return(

<div className="cards">
    
<div className="card">
    <h1>{props.name}</h1>
    <h4>{props.age}</h4>
    <h4>{props.sal}</h4>
    <Status Working={()=>alert(props.isWork?"working":"not working")} isWork={props.isWork}/>
</div>
     </div>
)
}
export default Sections