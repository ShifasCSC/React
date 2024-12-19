import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Email(){
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const handleChange=(e)=>{
        setEmail(e.target.value)    
    }
    const  handleSubmit=async(e)=>{
        try{
            e.preventDefault()
         const res=await axios.post(`http://localhost:3006/api/mail`,{email})
         console.log(res);    
           if(res.status==200){
            localStorage.setItem('email',email)
            console.log(email);    
            alert(res.data.msg)
            navigate('/signin')
           }
        }catch(error){
            console.log(error);  
            alert(error) 
        }
    }
    return(
        <>
        <div>
            <div className="mail">
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-5xl">Email Verification</h2>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-lg shadow-slate-500 bg-blend-darken">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                
                                <label htmlFor="email" className="text-base font-medium text-gray-900"> Email address :</label>
                                <div className="mt-2 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    </div>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="block w-full py-2 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-slate-500 border border-transparent rounded-md focus:outline-none hover:bg-slate-700 focus:bg-blue-700">
                                    Verify
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

            </div>
        </div>
        </>
    )
}
export default Email