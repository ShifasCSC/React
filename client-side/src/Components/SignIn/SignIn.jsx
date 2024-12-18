import React from "react";
import "../SignIn/SignIn.scss"

function SignIn(){
    return(
        <>
            <h1 id="log" className="text-center text-3xl font-extrabold">WELCOME BACK TO LOGIN!</h1>
        <div className="signin flex justify-center mt-5 items-center border-black">
            <form id="frm" className=" border-2 rounded border-slate-500   items-center p-10 ">
                <table>
                 <tbody>
                   <tr>
                <td><label htmlFor="mail">Email:</label></td>
                   </tr>
                   <tr>
                    <td><input type="text" name="mail" placeholder="enter your registered mail" id="mail" className="block w-full py-1 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 border-2 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" /></td>
                   </tr>
                   <tr>
                    <td><label  htmlFor="pwd" className="lab">password:</label></td>
                   </tr>
                   <tr>
                    <td><input type="password" name="pwd" id="pwd" placeholder="enter email password" className="block w-full py-1 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border  border-gray-400 border-2 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" /></td>
                   </tr>
                   <tr>
                  <td><label  htmlFor="cpwd" className="lab">confirm password:</label></td>
                   </tr>
                   <tr>
                    <td><input type="password" name="cpwd" id="cpwd" placeholder="re-enter your password " className="block w-full py-1 pl-1 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 border-2 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" /></td>
                   </tr>
                   <tr>
                    <td><button className="mt-5 bg-slate-500 text-white w-full py-1 pl-5 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md  focus:border-blue-600">login</button></td>
                   </tr>
                   <tr>
                    <td>
                        <h5>Don't have an account?<a href="../Email/Email" className="text-sky-700 decoration-solid hover:underline">Create an account</a></h5>
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