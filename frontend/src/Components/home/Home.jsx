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
  const [minPrice, setMinPrice] = useState(0); // Minimum price
  const [maxPrice, setMaxPrice] = useState(10000); // Maximum price

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, minPrice, maxPrice]);

  const getDetails = async () => {
    try {
      if (value !== null) {
        const res = await axios.get(`${route()}home`, {
          headers: { Authorization: `Bearer ${value}` },
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
      console.error('Error fetching product details:', error);
    }
  };

  const filterProducts = () => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.pname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      return matchesSearch && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  return (
    <div className="home">
      <div className="filter-container">
        <input
          className="search-input"
          placeholder="Search Products..."
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="price-filter">
          <label>
            Min Price:
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </label>
        </div>
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
                  <div className="category">
                    {product.category.toUpperCase()}
                  </div>
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
