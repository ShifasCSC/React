import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

import Api from '../Api';


const Nav = ({ user, setUser, profile }) => {
  const navigate = useNavigate();
  const api = Api();
  // const token = localStorage.getItem('token');
  // const [data, setData] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

 

  if (user.accType === null) {
    // Fallback in case accountType is not available
    return <div>Loading...</div>;
  }

  return (
    <div className="nav">
      
          <span className="heading">
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
              chowara
            </Link>
          </span>
        
      <div className="user-info">
          
        <div className="image">
          <img className="profile" src={user.profile ? user.profile : './836.jpg'} alt="" onClick={toggleDropdown} />
          <div className="profile-dropdown">
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to={'/profile'}>
                    <div>Profile</div>
                  </Link>
                </li>
                <li>
                  <button
                    className="logout"
                    onClick={() => {
                      localStorage.removeItem('token');
                      setUser('');
                      navigate('/signin');
                    }}
                  >
                    LOGOUT
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
            <h1 className='underline-offset-4 decoration-2 decoration-solid decoration-white underline text-xl font-semibold text-yellow-500'> {user.username} - <span className='text-white text-sm '>{user.acctype}</span></h1>
      </div>
    </div>
  );
};

export default Nav;
