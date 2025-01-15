import React, { useState } from 'react';
import route from '../route';
import axios from 'axios';
import './NewPassword.scss';
import { useNavigate } from 'react-router-dom';
import ForgotPass from './../ForgotP/ForgotPass';

const NewPassword = () => {
    const email=localStorage.getItem('email'); 
    const [passwordDetails, setDetails] = useState({
        npassword: "",
        cpassword: ""
      });
      const navigate=useNavigate();
      const handleChange = (e) => {
        setDetails((pre) => ({ ...pre, [e.target.name]: e.target.value }));
      };
      const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const { status, data } = await axios.post(`${route()}changepassword`, {...passwordDetails,email});
            if (status === 201) {
              localStorage.removeItem("email");
              alert(data.msg)
              navigate('/login');
            } else { 
              alert(data.msg );
            }
          } catch (error) {
            alert("Password not Changed");
          }
      }
  return (
   <div className="NewPassword">
     <form className="form">
    <h4 className='head'>Update Your Password</h4>

        <input name='npassword' id='npassword' placeholder="New Password" type="password" className="input" onChange={handleChange}/>

        <input name='cpassword' id='cpassword'   placeholder="Confirm Password" type="password" className="input" onChange={handleChange} />

      <button className="submit" onClick={handleSubmit}>Submit</button>
     
    </form>
   </div>
  );
};

export default NewPassword;
