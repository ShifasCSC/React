import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import Api from "../Api";
function SignUp(){
    const api=Api()
    const navigate=useNavigate()
    const email=localStorage.getItem('email'||"");
    const [sign,setSign]=useState({
        username:"",
        email:email,
        phone:"",
        password:"",
        cpassword:"",
        acctype:"",
        profile:""
    })
    const handleInput=(e)=>{
        setSign((pre)=>({...pre,[e.target.name]:e.target.value}))
        
    }
    const handleSubmit=async(e)=>{
        try{
            e.preventDefault()
            const res=await axios.post(`${api}/signup`,sign);
            if(res.status==201){
                alert(res.data.msg)
                navigate('/signin')  
            }

       }catch(error){
        console.log(error);
        alert(error)
        
    }
       }

       function convertBase64(file){
        return new Promise((resolve,reject)=>{
            const fileReader=new FileReader()
            fileReader.readAsDataURL(file);
            fileReader.onload=()=>{
               resolve(fileReader.result) 
            }
            fileReader.onerror=(error)=>{
                reject(error)
            }
        })
       }
       const handleFile=async(e)=>{
        console.log(e.target.files[0]);
        const profile=await convertBase64(e.target.files[0])
        setSign((pre)=>({...pre,profile:profile}))
        
       }
    return(
        <>
        <section className="py-4 bg-gray-50 sm:py-8 lg:py-4">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" max-w-md mx-auto mt-2 shadow-xl shadow-slate-700 md:mt-16">
            <h2 className="max-w-2xl text-center mx-auto sm:px-6 lg:px-8   text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">Register</h2>
            <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-2 py-6 sm:px-8 sm:py-7">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            
                                <label htmlFor="username" className="text-base font-medium text-gray-900">Username </label>
                                <div className=" relative text-gray-400 focus-within:text-gray-600">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        onChange={handleInput}
                                        placeholder="Enter your full name"
                                        className="block w-full py-2 pl-1 pr-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            <div>
                                <label htmlFor="email" className="text-base font-medium text-gray-900"> Email </label>
                                <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                   

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={handleInput}
                                        placeholder="Enter email "
                                        className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <label htmlFor="phone" className="text-base font-medium text-gray-900"> Phone </label>
                                <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                   

                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        onChange={handleInput}
                                        placeholder="Enter your phone number "
                                        className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={handleInput}
                                        placeholder="Enter your password"
                                        className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="cpassword" className="text-base font-medium text-gray-900"> Confirm Password </label>
                                <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    

                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        onChange={handleInput}
                                        placeholder="Confirm your password"
                                        className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="acctype" className="text-base font-medium text-gray-900">Account Type:</label>
                                <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    <select onChange={handleInput} className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" name="acctype" id="acctype">
                                        <option value="">--select--</option>
                                        <option value="seller">seller</option>
                                        <option value="buyer">buyer</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="profile">profile:</label>
                                <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                    <input type="file" id="profile" className=" block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" name="profile" onChange={handleFile} />
                                </div>
                            </div>


                            <div>
                                <button type="submit" className="inline-flex items-center justify-center w-full px-2 py-1 text-base font-semibold text-white transition-all duration-200 bg-slate-600 border border-transparent rounded-md focus:outline-none hover:bg-slate-700 focus:bg-blue-700">
                                    Create account
                                </button>
                            </div>

                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}
export default SignUp