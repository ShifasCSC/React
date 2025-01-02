import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Api from '../Api'

const EditComapany = () => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const api=Api()

  const [updateData, setUpdateData] = useState({
    name:'',email:'',phone:'',place:''
  })
  const [proBool, setProBool] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if(token){
      const {data} = await axios.get(`${api}/getcompany`, { headers: { "authorization": `Bearer ${token}` } })
      console.log(data);
      data? setProBool(true) : setProBool(false)
      setUpdateData(data)
    }
    else{
      navigate('/signin')
    }
  }

  const handleChange = (e) => {
    setUpdateData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await axios.post(`${api}/editcompany`, updateData, { headers: { "authorization": `Bearer ${token}` } })
        alert(data.msg)
        navigate('/sell')
    } catch (error) {
      console.log(error)
      alert(error.response.data.msg)
    }
  }
  console.log(proBool);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 lg:w-1/3">
        <h2 className="text-2xl font-semibold text-center mb-6 underline-offset-4 decoration-4 decoration-solid decoration-gray-500 underline">Edit Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Company Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={updateData.name}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={updateData.email}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   placeholder="asd@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={updateData.phone}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   placeholder="Edit here..."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="place" className="block text-sm font-bold mb-2">Place:</label>
            <input
              type="text"
              id="place"
              name="place"
              value={updateData.place}
              onChange={handleChange}
              className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            //   placeholder="Edit here..."
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-2 bg-gray-600 text-white hover:text-black rounded-md hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
            onClick={handleSubmit}
          >
            {proBool ? 'Edit' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditComapany
