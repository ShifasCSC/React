import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import './Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ username, role, loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const [isSeller, setIsSeller] = useState(false);      
  const [isPopoverVisible, setIsPopoverVisible] = useState(false); 

  useEffect(() => {
    setIsSeller(role === "seller");
  }, [role]);

  const handleLogout = () => {
    localStorage.removeItem('Auth');
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to={'/home'}>
          <span className="website-name">CHOVARA</span>
        </Link>
      </div>

      <div className="navbar-right">
        {loggedIn ? (
          <>
            <h4 className='navh4'>{username}</h4>
            <div className="profile-containerr">
              <img 
                className="profile" 
                src="./profile.png" 
                alt="Profile" 
                onClick={() => setIsPopoverVisible(!isPopoverVisible)} 
              />
              {isPopoverVisible && (
                <div className="profile-popover">
                  <Link to="/profile">
                    <button className="popover-btn1">Profile</button>
                  </Link>
                  <button className="popover-btn2" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>

            <Link to="/cart" className="cart-icon">
              CART
            </Link>
          </>
        ) : (
          <Link to="/" className="log">
            <img src="./images/profile.png" alt="Login" />
            <p>Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;