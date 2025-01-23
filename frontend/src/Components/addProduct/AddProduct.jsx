import React, { useState, useEffect } from 'react';
import axios from 'axios';
import route from '../route';
import './AddProduct.scss';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({setUsername, setRole, setLoggedIn }) => {
    const navigate = useNavigate();
    const value = localStorage.getItem("Auth")
    const [category, setCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [categories, setCategories] = useState([]); 
    const [brand, setBrand] = useState("")
    const [productDetails, setProductDetails] = useState({
        pname: '',
        price: '',
        sizeQuantities: {
            S: 0, M: 0, L: 0, XL: 0, XXL: 0, XXXL: 0,
        },
        pimages: [],
    });
    const [isAddCategory, setAddCategory] = useState(false)

    useEffect(() => {
        getEssentials();
    }, []);

    const getEssentials = async () => {
        try {
            const { status, data } = await axios.get(`${route()}company`, { 
                headers: { "Authorization": `Bearer ${value}` } 
            });
            if (status === 200) {
                setUsername(data.username)
                setRole(data.role);
                setLoggedIn(true);
                if (data.category.length > 0) 
                    setCategories(data.category[0].categories);
                if (data.company) {
                    setBrand(data.company.name)
                }
            }
        } catch (error) {
            console.error("Error fetching essentials:", error);
        }
    };

    const handleNewCategoryChange = (e) => {
        setNewCategory(e.target.value);
    };

    const handleAddCategory = async () => {
        if (newCategory.trim()) {
            try {
                const {status, data} = await axios.post(
                    `${route()}editcategory`,
                    {newCategory},
                    {headers: {"Authorization": `Bearer ${value}`}}
                );
                if (status === 201) {
                    setCategories([...categories, newCategory]);
                    setCategory(newCategory);
                    alert(data.msg);
                    setAddCategory(false);
                    setNewCategory('');
                } else {
                    alert("Error adding category");
                }
            } catch (error) {
                console.error("Category add error:", error);
            }
        }
    };

    const handleSizeQuantityChange = (size, e) => {
        setProductDetails({
            ...productDetails,
            sizeQuantities: {
                ...productDetails.sizeQuantities,
                [size]: parseInt(e.target.value, 10) || 0,
            },
        });
    };

    const handleProductDetailChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value,
        });
    };

    const handleImageChange = async (e) => {
        const files = Array.from(e.target.files);
        const imagePromises = files.map(convertToBase64);
        const images = await Promise.all(imagePromises);
        
        setProductDetails({
            ...productDetails,
            pimages: images,
        });
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { status, data } = await axios.post(
                `${route()}addproduct`, 
                {...productDetails, brand, category},
                {headers: {"Authorization": `Bearer ${value}`}}
            );
            
            if (status === 201) {
                alert(data.msg);
                navigate('/company');
            } else {
                alert("Adding product incomplete");
            }
        } catch (error) {
            console.error("Submit error:", error);
            alert("Error submitting product");
        }
    };

    return (
        <div className="add-product-container">
            <div className="add-product">
                <h2>Add Product</h2>
                <form className="product-form" onSubmit={handleSubmit}>
                    <div className="product-form-section category-section">
                        <div className="form-group category-group">
                            <label>Product Category</label>
                            <div className="category-select-wrapper">
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    disabled={categories.length === 0}
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((cat, index) => (
                                        <option key={index} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                
                                <button 
                                    type="button" 
                                    className="add-category-btn "
                                    onClick={() => setAddCategory(!isAddCategory)}
                                >
                                    +
                                </button>
                            </div>
                            
                            {isAddCategory && (
                                <div className="new-category-input">
                                    <input
                                        type="text"
                                        value={newCategory}
                                        onChange={handleNewCategoryChange}
                                        placeholder="New category name"
                                    />
                                    <button 
                                        type="button" 
                                        onClick={handleAddCategory}
                                        className="confirm-category-btn"
                                    >
                                        Add
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="product-form-section product-details-section">
                        <div className="form-column">
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    name="pname"
                                    value={productDetails.pname}
                                    onChange={handleProductDetailChange}
                                    placeholder="Enter product name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={productDetails.price}
                                    onChange={handleProductDetailChange}
                                    placeholder="Enter price"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Brand</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={brand}
                                    disabled
                                />
                            </div>

                            <div className="form-group">
                                <label>Product Images</label>
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleImageChange}
                                    accept="image/*"
                                />
                            </div>
                        </div>

                        <div className="form-column">
                            <div className="form-group size-group">
                                <label>Sizes & Quantities</label>
                                <div className="size-quantity-grid">
                                    {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size) => (
                                        <div key={size} className="size-input">
                                            <label>{size}</label>
                                            <input
                                                type="number"
                                                min="0"
                                                value={productDetails.sizeQuantities[size]}
                                                onChange={(e) => handleSizeQuantityChange(size, e)}
                                                placeholder="Qty"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;