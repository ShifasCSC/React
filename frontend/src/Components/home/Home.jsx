import React, { useEffect, useState } from 'react';
import route from '../route';
import axios from 'axios';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = ({ setUsername, setRole, setLoggedIn }) => {
  const value = localStorage.getItem('Auth');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getDetails();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = products.filter(product =>
      product.pname.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(query.trim() === '' ? products : filtered);
  };

  const getDetails = async () => {
    try {
      if (value !== null) {
        const res = await axios.get(`${route()}home`, {
          headers: { "Authorization": `Bearer ${value}` }
        });
        
        if (res.status === 200) {
          setUsername(res.data.username);
          setRole(res.data.role);
          setLoggedIn(true);
          setProducts(res.data.products);
          setFilteredProducts(res.data.products);
        } else if (res.status === 403) {
          setLoggedIn(false);
        }
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return (
    <div className='home'>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search Products..."
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link 
              to={`/product/${product._id}`} 
              key={product._id} 
              className="product-link"
            >
              <div className="product-card">
                <div className="product-image">
                  <img 
                    src={product.pimages[0]} 
                    alt={product.pname} 
                    className="image"
                  />
                </div>
                <div className="product-details">
                  <div className="category">{product.category.toUpperCase()}</div>
                  <div className="name">{product.pname.substring(0, 20)}</div>
                  <div className="price">₹{product.price}</div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-products">No products available</p>
        )}
      </div>
    </div>
  );
};

export default Home;  