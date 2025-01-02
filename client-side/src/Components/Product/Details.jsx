import React, { useEffect, useState } from 'react';
import { useNavigate, useParams,Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const ProductDetails = ({user,setUser}) => {
    const token= localStorage.getItem('token')
    const api = Api();
    const { _id } = useParams(); // Get product ID from URL params 
    const navigate = useNavigate(); // For redirecting
    const [product, setProduct] = useState(null); // State to store product details
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        fetchProductDetails();
    }, []);
    const accountType= user.acctype;
    
    
    

    // Fetch product details by ID
    const fetchProductDetails = async () => {
        try {
            const { data } = await axios.get(`${api}/disproduct/${_id}`);
            console.log(data);
                setProduct(data);
                setMainImage(data.images[0]); // Set the first image as the main image initially
        } catch (error) {
            console.log("Error fetching product details:", error);
        }
    };

    // Delete product
    const handleDelete = async () => {
        try {
            await axios.delete(`${api}/delproduct/${_id}`);
            alert('Product deleted successfully!');
            navigate('/'); // Redirect to products page after deletion
        } catch (error) {
            console.log("Error deleting product:", error);
            alert('Error deleting product!');
        }
    };

    // Handle editing the product
    const handleCart = () => {
        alert("added to cart")
        navigate(`/cart`); // Redirect to the cart page
    };

    if (!product) return <div>Loading...</div>; // Show loading if product is not yet fetched

    return (
        <div className="flex flex-wrap justify-center mt-8">
            {/* Left side: Main product image */}
            <div className="w-full sm:w-48 md:w-56 lg:w-64 h-96 p-4 m-2 shadow-lg">
                <div className="main-image text-center mb-4">
                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-full h-60 object-cover border rounded-md"
                    />
                </div>

                {/* Sub-images (hover to change main image) */}
                <div className="sub-images flex justify-between">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sub Image ${index + 1}`}
                            className="sub-image w-24 h-24 object-cover cursor-pointer border rounded-md"
                            onMouseOver={() => setMainImage(image)}
                        />
                    ))}
                </div>
            </div>

            {/* Right side: Product details */}
            <div className="w-full sm:w-48 md:w-56 lg:w-64 p-4 m-2 bg-white shadow-lg rounded-md">
                <h1 className="text-2xl font-semibold mb-4">{product.productName}</h1>
                <p className="text-xl font-semibold text-green-600 mb-4">${product.price}</p>
                <p className="text-lg font-semibold mb-4">Category: {product.category}</p>

                <div className="mb-4">
                    <label htmlFor="size" className="block text-lg font-semibold mb-2">Size:</label>
                    <select id="size" className="w-full p-2 border rounded-md">
                        {product.sizes.map((size, index) => (
                            <option className='h-5 p-2' key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                  {accountType=="seller"?(

                      <div className="flex gap-4 mt-20">
                    {/* Edit and Delete buttons */}
                    <button
                        className="bg-blue-500 text-white p-2 rounded-md w-full"
                        
                        >
                        <Link to={`/editprofile/${_id}`}>edit</Link>
                    </button>
                    <button
                        className="bg-red-600 text-white p-2 rounded-md w-full"
                        onClick={handleDelete}
                        >
                        Delete
                    </button>
                </div>

                    ):accountType=="buyer"?(
                        <div className="flex gap-4 mt-20">
                    {/* Edit and Delete buttons */}
                    <button
                        className="bg-blue-600 text-white p-2 rounded-md w-full"
                        
                        >
                        <Link to={`/editprofile/${_id}`}>buy</Link>
                    </button>
                    <button
                        className="bg-blue-600 text-white p-2 rounded-md w-full"
                        onClick={handleCart}
                        >
                        add cart
                    </button>
                </div>
                    
                    ):(
                        <div><h2>invalid</h2></div>
                    )}
            </div>
        </div>
    );
};

export default ProductDetails;
