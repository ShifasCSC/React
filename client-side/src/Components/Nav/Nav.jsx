import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Nav.scss'
import user_icon from './person.png'
import Api from '../Api'


const Nav = ({user,setUser,profile}) => {
const navigate=useNavigate()
const api=Api()
const token =localStorage.getItem('token')
const [data,setData]=useState({})
const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav">
    <span className='heading'><Link to={'/'} style={{textDecoration:"none",color:"white",marginRight:"10px"}}>chowara</Link></span>
   
    <div className="user-info">
    <h1>{user.username}</h1>
   <div className="image">
      <img className='profile' src={user.profile?user.profile:"./836.jpg"} alt="" onClick={toggleDropdown} />
      <div className="profile-dropdown">   
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                 <Link to={'/profile'}> <div>Profile</div></Link>
                </li>
                <li>
                 <button className='logout' onClick={()=>{

                  localStorage.removeItem('token')
                  setUser("")
              navigate('/signin')
            }}>LOGOUT</button>
                </li>
              </ul>
              )}
              </div>
   </div>
    </div>
     </div>
  )
}

export default Nav