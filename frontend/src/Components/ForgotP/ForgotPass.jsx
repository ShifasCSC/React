import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import route from '../route';
import './ForgotPass.scss';

const ForgotPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const { status, data } = await axios.post(`${route()}forgotpassword`, { email }, { Headers: { "Content-Type": "application/json" } });
    
    if (status === 201) {
      localStorage.setItem('email', email);
      alert(data.msg);
      navigate('/newpassword');
    } else if (status === 403) {
      alert(data.msg);
    } else {
      alert(data.msg);
    }
  };

  return (
    <div className='ForgotPass'>
      <div className="form-container">
        <div className="logo-container">
          Forgot Password
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={email}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            <span>Continue</span>
           
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default ForgotPass;
