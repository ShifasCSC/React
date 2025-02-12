import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Api from '../Api';
import "./Edit.css"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Edit() {
  const { _id } = useParams()
  const api = Api()
  const navigate = useNavigate()
  const [data, setData] = useState({ email: "", phone: "", username: "" })
  const [edit, setEdit] = useState(false)
  useEffect(() => {
    if (!_id) {
      console.log("id not defined");
      return
    }
    async function userData() {
      try {
        const details = await axios.get(`${api}/getuser/${_id}`)
        if (details.status == 200) {
          setData(details.data.user)
          console.log(details.data.user);
        }
      } catch (error) {
        console.log(error.response);
      }
    }
    userData()
  }, [_id])

  const handleChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    console.log(data);
  }
  const handleSave = async () => {
    try {
      const updt = await axios.put(`${api}updateuser/${_id}`,data)
      if (updt.status == 200) {
        navigate("/")
       alert(updt.data.msg)
       edit(false) 
      }
    } catch (error) {
      console.log(error.response);

    }
  }
  return (
    <div className="div bg-slate-600 p-10 rounded-2xl">
      <table className='w-80'>
        <tbody>
          <tr>
            <td><label htmlFor="username">username:</label></td>
          </tr>
          <tr>
            <td><input onChange={handleChange} readOnly={!edit} className="w-full pl-2 border-collapse border border-black py-1 text-black rounded bg-white my-1" type="text" id='username' name='username' value={data.username} /></td>
          </tr>
          <tr>
            <td><label htmlFor="email">Email:</label></td>
          </tr>
          <tr>
            <td><input onChange={handleChange} readOnly={!edit} className="w-full pl-2 border-collapse border border-black py-1 text-black rounded bg-white my-1" type="email" id='email' name='email' value={data.email} /></td>
          </tr>
          <tr>
            <td><label htmlFor="phone">Phone:</label></td>
          </tr>
          <tr>
            <td><input onChange={handleChange} readOnly={!edit} className="w-full pl-2 border-collapse border border-black py-1 text-black rounded bg-white my-1" type="text" id='phone' name='phone' value={data.phone} /></td>
          </tr>
          <tr className='text=center'>
            <td><button id='btn' className={ edit ? "save-btn" : "edit-btn"} onClick={edit ? handleSave : () => setEdit(true)}>{edit ? "save" : "Edit"}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Edit