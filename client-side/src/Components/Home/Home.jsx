import axios from "axios";
import React, { useEffect} from "react";
import Api from "../Api"
import { useNavigate } from "react-router-dom";
const Home = ({setUser})=>{
    const api=Api()
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    useEffect(()=>{
        if(token){
            getUser()
        }else{
         navigate("/signin")
        }
    },[token])
    const getUser=async()=>{
        if(token){
            try{
               const res=await axios.get(`${api}/disp`,{headers:{"Authorization":`Bearer ${token}`}})
               setUser({username:res.data.user.username,profile:res.data.user.profile,res})
               
            }catch(error){
                console.log(error);
                alert(error.data)  
            }
        }
    }
    
    

return(
    <>
     <div className="home">

        
     </div>
    </>
)
}
export default Home