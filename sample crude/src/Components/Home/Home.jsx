import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import axios from "axios"
import Api from "../Api";
import "./Home.css"
const Home = () => {
    const api = Api()
    const [user, setUser] = useState([])
    useEffect(() => {
        async function fetchUser() {
            try {
                const resp = await axios.get(`${api}getusers`)
                if (resp.status == 200) {
                    setUser(resp.data.user)
                    console.log(resp.data.user);

                }
            } catch (error) {
                console.log(error);

            }
        }
        fetchUser()
    }, [])
    const handleDelete = async (_id) => {
    const delC=window.confirm("are you really want to delete this user data!!!")
    if(!delC)
        return
        try {
            const del = await axios.delete(`${api}deleteuser/${_id}`)
            if (del.status == 200) {
                setUser(userData => userData.filter(user => user._id !== _id))
                alert(del.data.msg)
            }
        } catch (error) {
            console.log(error);

        }
    }
    return (


        <div className="main w-full max-w-4xl shadow-lg rounded-lg p-4 bg-cyan-900">

            <button className="add bg-gray-500 text-white px-2 py-1 rounded">
                <Link to="/create">Add</Link>
            </button>
            <table className="w-full border-collapse">
                <thead className="text-center">
                    <tr className="bg-gray-800 text-white text-center">
                        <th className="px-6 py-2 border border-gray-300">name</th>
                        <th className="px-6 py-2 border border-gray-300">email</th>
                        <th className="px-6 py-2 border border-gray-300">phone</th>
                        <th className="px-6 py-2 border border-gray-300">buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((data, i) => (
                        <tr key={i} className="even:bg-gray-200 odd:bg-white">
                            <td className="px-6 py-1 border border-gray-300">{data.username}</td>
                            <td className="px-6 py-1 border border-gray-300">{data.email}</td>
                            <td className="px-6 py-1 border border-gray-300">{data.phone}</td>
                            <td className="px-6 py-1 border border-gray-300">
                                <button className="edit px-2 py-1 rounded mr-2">
                                    <Link to={`/edit/${data._id}`}>Edit</Link>
                                </button>
                                <button onClick={()=>handleDelete(data._id)} className="delete px-2 py-1 rounded">
                                    Delete
                                </button>
                            </td>




                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Home