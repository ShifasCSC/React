import React, { useEffect, useState } from 'react'
import './DisplayPost.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayPost = () => {
    const token= localStorage.getItem("Token")
    const {id}=useParams();
    console.log(id);
    const [posts,setPosts]=useState({});
    const [photos,setPhotos]=useState([])
    
    useEffect(()=>{
      getPosts()
    },[])

    const getPosts=async()=>{
       try{
        const res= await axios.get(`http://localhost:3000/api/getpostdetails/${id}`,{headers:{"Authorization":`Bearer ${token}`}})
        console.log(res)
        if(res.status==200){
            setPosts({...res.data});
            setPhotos(res.data.images)   
        }
       }catch(error){
          if(error.res){
            alert(error.res.data.msg)
          }
       } 
    }
  return (
    <div className='PostD'>
      <div className="left">
      {photos.map((photo,ind)=><img key={ind} src={photo} alt='post'/>)} 
      </div>
      <div className="right">
      
        <div className='datetime'>
        <label htmlFor="date"> Date: {posts.postedDate}</label>
      
      <label htmlFor="time">Time: {posts.postedTime}</label>
        </div>
      
        <div className="description">
        <label htmlFor="desc">
            {posts.description}
        </label>
        </div>
      </div>
    </div>
  )
}

export default DisplayPost