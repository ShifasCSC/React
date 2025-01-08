import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const ProductDetails = ({ user, setUser }) => {
    const token = localStorage.getItem('token');
    const api = Api();
    const { _id } = useParams(); // Get product ID from URL params
    const navigate = useNavigate(); // For redirecting
    const [product, setProduct] = useState(null); // State to store product details
    const [mainImage, setMainImage] = useState([]); // Main image state
    const [isInWishlist, setIsInWishlist] = useState(false); // State to track wishlist status
    const accountType = user?.acctype; // Account type (e.g., 'seller', 'buyer')

    useEffect(() => {
        fetchProductDetails();
        checkWishlistStatus(); // Check if the product is in the wishlist
    }, [_id]);

    // Fetch product details by ID
    const fetchProductDetails = async () => {
        try {
            const { data } = await axios.get(`${api}/disproduct/${_id}`);
            if (data && data.images && data.images.length > 0) {
                setProduct(data);
                setMainImage(data.images[0]);
            } else {
                console.error('No images found in product details');
            }
        } catch (error) {
            console.log('Error fetching product details:', error);
        }
    };
    

    // Check if the product is already in the wishlist
    const checkWishlistStatus = async () => {
        try {
            const { data } = await axios.get(`${api}/check/${_id}`, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            setIsInWishlist(data.isInWishlist); // Set the initial wishlist state
        } catch (error) {
            console.log('Error checking wishlist status:', error);
        }
    };

    // Add product to wishlist
    const handleAddToWishlist = async () => {
        try {
            await axios.post(`${api}/addwish/${_id}`, {}, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            setIsInWishlist(true); // Update the state to reflect the change
        } catch (error) {
            console.log('Error adding to wishlist:', error);
        }
    };

    // Remove product from wishlist
    const handleRemoveFromWishlist = async () => {
        try {
            await axios.delete(`${api}/remwish/${_id}`, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            setIsInWishlist(false); // Update the state to reflect the change
        } catch (error) {
            console.log('Error removing from wishlist:', error);
        }
    };

    // Delete product
    const handleDelete = async () => {
        try {
            await axios.delete(`${api}/delproduct/${_id}`, {
                headers: { "Authorization": `Bearer ${token}` },
            });
            alert('Product deleted successfully!');
            navigate('/'); // Redirect to products page after deletion
        } catch (error) {
            console.log('Error deleting product:', error);
            alert('Error deleting product!');
        }
    };

    if (!product) return <div>Loading...</div>; // Show loading if product is not yet fetched

    return (
        <div className="flex flex-wrap justify-center mt-8">
            {/* Left side: Main product image */}
            <div className="w-full sm:w-60 md:w-80 lg:w-96 h-auto sm:w-auto p-4 m-2 shadow-lg">
                <div className="main-image p-5 bg-center bg-fixed bg-cover text-center mb-4">
                    <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-full h-60 object-cover border rounded-md"
                    />
                </div>

                {/* Sub-images (hover to change main image) */}
                <div className="sub-images flex flex-wrap justify-between">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Sub Image ${index + 1}`}
                            className="sub-image w-24 h-24 p-3 object-cover cursor-pointer border rounded-md"
                            onMouseOver={() => setMainImage(image)}
                        />
                    ))}
                </div>
            </div>

            {/* Right side: Product details */}
            <div className="w-full sm:w-60 md:w-80 lg:w-96 p-4 m-2 bg-white shadow-lg rounded-md">
                {/* Wishlist Heart Icon */}
                <div className="flex justify-end mb-4">
                    <button
                        className={`text-2xl ${isInWishlist ? 'text-red-500' : 'text-gray-500'}`}
                        onClick={isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist}
                    >
                        {isInWishlist ? '❤️' : '🤍'} {/* Heart icon */}
                    </button>
                </div>

                <h1 className="text-2xl font-semibold mb-4">{product.productName}</h1>
                <p className="text-xl font-semibold text-green-600 mb-4">${product.price}</p>
                <p className="text-lg font-semibold mb-4">Category: {product.category}</p>

                <div className="mb-4">
                    <label htmlFor="size" className="block text-lg font-semibold mb-2">Size:</label>
                    <select id="size" className="w-full p-2 border rounded-md">
                        {product.sizes.map((sizeObj, index) => (
                            <option className="h-5 p-2" key={index} value={sizeObj.size}>
                                {sizeObj.size} (Quantity: {sizeObj.quantity})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Action buttons */}
                {accountType === 'seller' ? (
                    <div className="flex gap-4 mt-20">
                        {/* Edit and Delete buttons */}
                        <button className="bg-blue-500 text-white p-2 rounded-md w-full">
                            <Link to={`/editproduct/${_id}`}>Edit</Link>
                        </button>
                        <button
                            className="bg-red-600 text-white p-2 rounded-md w-full"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                ) : accountType === 'buyer' ? (
                    <div className="flex gap-4 mt-20">
                        {/* Buy and Add to Cart buttons */}
                        <button className="bg-blue-600 text-white p-2 rounded-md w-full">
                            <Link to={`/editprofile/${_id}`}>Buy</Link>
                        </button>
                        <button
                            className="bg-blue-600 text-white p-2 rounded-md w-full"
                        >
                            Add to Cart
                        </button>
                    </div>
                ) : (
                    <div><h2>Invalid Account Type</h2></div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
