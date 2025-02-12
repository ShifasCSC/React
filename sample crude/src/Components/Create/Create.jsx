import axios from 'axios';
import React, { useState } from 'react'
import Api from '../Api';
import "./Create.css"
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate()
    const api = Api()
    const [data, setData] = useState({ username: "", email: "", phone: "" })
    const handleChange = (e) => {
        setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
        console.log(data);

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${api}setuser`, data)
            if (res.status == 201) {
                alert(res.data.msg)
                navigate("/")
            }
        } catch (error) {
            alert(error.response.data.msg)
            console.log(error.response.data);

        }
    }
    return (
        <div className="form w-90 p-5 border-none bg-gray-800 rounded flex justify-center ">
            <form onSubmit={handleSubmit}>
                <table className='w-80'>
                    <tbody>
                        <tr>
                            <td><label htmlFor="username">username:</label></td>
                        </tr>
                        <tr>
                            <td><input className="w-full border-collapse border border-black py-1 text-black rounded bg-gray-200 my-1" type="text" id='username' name='username' onChange={handleChange} placeholder='enter your name' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="email">Email:</label></td>
                        </tr>
                        <tr>
                            <td><input className="w-full border-collapse border border-black py-1 text-black rounded bg-gray-200 my-1" type="email" id='email' name='email' onChange={handleChange} placeholder='enter your email' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Phone:</label></td>
                        </tr>
                        <tr>
                            <td><input className="w-full border-collapse border border-black py-1 text-black rounded bg-gray-200 my-1" type="text" id='phone' name='phone' onChange={handleChange} placeholder='enter your number' /></td>
                        </tr>
                        <tr className='text=center'>
                            <td className='text=center flex justify-center'><input type="submit" className='bg-gray-600 px-3 py-1 rounded mt-3 text-center text-white hover:bg-white hover:text-black ' /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Create