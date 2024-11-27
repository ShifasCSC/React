import { useParams } from "react-router-dom"
import "./Add.css"
import { useEffect, useState } from "react"

function Edit(){
    const {_id}=useParams()
    const[emp,setEmp]=useState({})


    const displpayData=async()=>{
        const res=await fetch(`http://localhost:3001/api/displayemp/${_id}`)
        const data=await res.json()
        setEmp({...data})
        console.log(emp);
        
    }
    const handleFile=async(e)=>{
        console.log(e.target.files[0]);
        const profile=await convertBase64(e.target.files[0])
        setEmp((pre)=>({...pre,profile:profile}))
        

    }
    function convertBase64(file){
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload=()=>{
                resolve(fileReader.result)
            }
            fileReader.onerror=()=>{
                reject(error)
            }
        })
    }
    useEffect(()=>{
      displpayData()  
    },[])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res=await fetch(`http://localhost:3001/api/updateemp/${_id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(emp)
        })
            if(res.status==201){
                const data=await res.json()
                alert("sucess")
            }else{
                alert("cannot update something went wrong")
            }
            console.log(data);
        }
        
    
    const handleChange=(e)=>{
      console.log(e.target.name);
      console.log(e.target.value);
      setEmp((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    return(
        <>
         <div className="newcontain">
        <div className="contain">
        <form className="frm" onSubmit={handleSubmit}>
            <h1 id="head">Employ Form</h1>
           <table>
               <tbody>
             <tr>
                 <td>Name:</td>
                 <td><input type="text" onChange={handleChange} value={emp.name}  name="name" /></td>
             </tr>
             <tr>
                 <td>gender:</td>
                 <td>
                     <input type="radio" checked={emp.gender==="male"} onChange={handleChange} name="gender" value="male"/><span>male</span>
                     <input type="radio" checked={emp.gender==="female"} onChange={handleChange} name="gender" value="female"/><span>female</span>
                     <input type="radio" checked={emp.gender==="other"} onChange={handleChange} name="gender" value="other"/><span>other</span>
                 </td>
             </tr>
             <tr>
                 <td>age:</td>
                 <td><input type="text" onChange={handleChange} name="age" value={emp.age} /></td>
             </tr>
             <tr>
                 <td>email:</td>
                 <td><input type="text" onChange={handleChange} name="email" value={emp.email} /></td>
             </tr>
             <tr>
                 <td>place:</td>
                 <td><input type="text" onChange={handleChange} name="place" value={emp.place} /></td>
             </tr>
             <tr>
                 <td>phone:</td>
                 <td><input type="text" onChange={handleChange} name="phone" value={emp.phone}/></td>
             </tr>
             <tr>
                 <td>experience:</td>
                 <td><input type="text" onChange={handleChange} name="experience" value={emp.experience} /></td>
             </tr>
             <tr>
                 <td>designation:</td>
                 <td>
                     <select name="designation" id="desig" value={emp.designation} onChange={handleChange}>
                         <option value="" name="designation" >select</option>
                         <option value="mern"  name="designation" >mern</option>
                         <option value="python"  name="designation">python</option>
                         <option value="flutter"  name="designation">flutter</option>
                         <option value="andriod"  name="designation">andriod</option>
                     </select>
                 </td>
             </tr>
             <tr>
                 <td>salary:</td>
                 <td><input type="text" onChange={handleChange} name="salary" value={emp.salary} /></td>
             </tr>
             <tr>
                 <td>profile:</td>
                 <td><input type="file" id="profile" onChange={handleFile}  name="profile" className="profile" /></td>
             </tr>
             <tr>
                 <td><input type="submit" value="update"  className="update" name="update" /></td>
             </tr>
 
             </tbody>
           </table>
           </form>
        </div>
        </div>
        </>
    )
}
 
 export default Edit