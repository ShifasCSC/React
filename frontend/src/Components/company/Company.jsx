import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaSave } from 'react-icons/fa';
import { BsFillBuildingsFill } from "react-icons/bs";

import route from "../route";
import './Company.scss';
import { Link } from 'react-router-dom';

const Company = ({setUsername, setRole, setLoggedIn }) => {
  const value = localStorage.getItem("Auth");
  const [company, setCompany] = useState({
    name: "",
    location: "",
    gstin: "",
    contact: ""
  });
  const [categories, setCategories] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  
  useEffect(() => {
    getEssentials();
  }, []);

  const getEssentials = async () => {
    try {
      const { status, data } = await axios.get(`${route()}company`, { 
        headers: { "Authorization": `Bearer ${value}` } 
      });
      if (status === 200) {
        setUsername(data.username);
        setRole(data.role);
        setLoggedIn(true);
        if (data.company) setCompany(data.company);
        if (data.category && data.category.length > 0) {
          setCategories(data.category[0].categories);
        }
      }
    } catch (error) {
      console.error("Error fetching company data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSave = async () => {
    if (isEditable) {
      try {
        const { status, data } = await axios.post(
          `${route()}editcompany`, 
          company, 
          { headers: { "Authorization": `Bearer ${value}` } }
        );
        if (status === 201) {
          alert(data.msg);
        } else {
          alert("Error saving company details");
        }
      } catch (error) {
        console.error("Save error:", error);
        alert("An error occurred while saving");
      }
      setIsEditable(false);
    } else {
      setIsEditable(false);
    }
  };

  return (
    <div className="company-container">
      <div className="company-details">
        <div className="company-info">
          <div className="company-header">
            <div className="company-photo">
              <BsFillBuildingsFill size={60} />
            </div>
            
            <div className="action-buttons">
              {!isEditable ? (
                <button className="edit-btn" onClick={handleEditClick}>
                  <FaEdit /> Edit
                </button>
              ) : (
                <button className="save-btn" onClick={handleSave}>
                  <FaSave /> Save
                </button>
              )}
            </div>
          </div>

          <div className="company-fields">
            <div className="company-field">
              <label>Company Name:</label>
              <input 
                type="text" 
                value={company.name} 
                name="name"
                onChange={handleChange} 
                disabled={!isEditable}
                className="editable-input"
              />
            </div>

            <div className="company-field">
              <label>Location:</label>
              <input 
                type="text" 
                name="location"
                value={company.location} 
                onChange={handleChange} 
                disabled={!isEditable}
                className="editable-input"
              />
            </div>

            <div className="company-field">
              <label>GSTIN:</label>
              <input 
                type="text" 
                name="gstin"
                value={company.gstin} 
                onChange={handleChange} 
                disabled={!isEditable}
                className="editable-input"
              />
            </div>
            
            <div className="company-field">
              <label>Contact:</label>
              <input 
                type="text" 
                name="contact"
                value={company.contact} 
                onChange={handleChange} 
                disabled={!isEditable}
                className="editable-input"
              />
            </div>
          </div>
        </div>

        <div className="company-categories">
          <div className="categories-header">
            <h3 className='text-white text-2xl'>Categories</h3>
            <div className="category-actions">
              <Link to="/orders" className="orders-link">
                Orders Confirmation
              </Link>
             <p className='text-white'>
              Products
              </p> 
              
              <Link to="/addproduct" className="add-product-btn">
                <FaPlus />
              </Link>
            </div>
          </div>
          
          <div className="category-list">
            {categories.map((category, index) => (
              <Link 
                to={`/products/${encodeURIComponent(category)}`} 
                key={index} 
                className="category-item"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;