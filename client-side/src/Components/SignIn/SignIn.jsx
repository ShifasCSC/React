import React, { useState } from "react";
import "../SignIn/SignIn.scss"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function SignIn(){
const navigate=useNavigate()
const [login,setLogin]=useState({email:"",password:""})

const HandleChange=(e)=>{
    setLogin((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(login);   
}
const handleSubmit=async(e)=>{
    try{
        e.preventDefault()
        const res=await axios.post(`http://localhost:3006/api/signin`,login)
        if(res.status==200)
        {
            localStorage.setItem("token",res.data.token)
            
            alert(res.data.msg)
            navigate('/')
        }

    }catch(error){
        console.log(error);
        console.log(error.res);
        
        alert(error.res.msg)
        
    }
}

    return(
        <>
            <h1 id="log" className="text-center  sm:text-4xl lg:text-5xl font-extrabold">WELCOME BACK TO LOGIN!</h1>
        <div className="signin flex justify-center mt-5 items-center border-black">
            <form id="frm" className=" border-2 rounded border-slate-500   items-center p-10 ">
                <table>
                 <tbody>
                   <tr>
                <td><label htmlFor="email">Email:</label></td>
                   </tr>
                   <tr>
                    <td><input type="text" onChange={HandleChange} name="email" placeholder="enter your registered mail" id="email" className="mt-4 mb-2 block w-full py-1 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 border-2 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" autoComplete="username webauthn" /></td>
                   </tr>
                   <tr>
                    <td><label  htmlFor="pwd" className=" mt-2 lab">password:</label></td>
                   </tr>
                   <tr>
                    <td><input type="password" onChange={HandleChange} name="password" id="password" placeholder="enter email password" className="mt-3 block w-full py-1 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border  border-gray-400 border-2 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" autoComplete="current-password" /></td>
                   </tr>
                   {/* <tr>
                  <td><label  htmlFor="cpwd" className="lab">confirm password:</label></td>
                   </tr> */}
                   {/* <tr>
                    <td><input type="password" name="cpwd" id="cpwd" placeholder="re-enter your password " className="block w-full py-1 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 border-2 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" /></td>
                   </tr> */}
                   {/* <tr>
                   <td><a href="#" title="" className="mt-5 text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"> Forgot password? </a></td>
                   </tr> */}
                   <tr>
                    <td><button onClick={handleSubmit} className="mt-5 bg-slate-600 text-white w-full py-1 pl-5 pr-4  transition-all duration-200 border border-gray-200 rounded-md  focus:border-blue-600">login</button></td>
                   </tr>
                   <tr>
                    <td>
                        <h5 className="mt-3">Don't have an account?<Link to={"/email"} className=" text-sky-700 decoration-solid hover:underline">Create an Account</Link></h5>
                    </td>
                   </tr>
                 </tbody>
                </table>
            </form>
        </div>
        </>
    )
}
export default SignIn