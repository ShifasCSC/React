import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const EditProduct = () => {
    const api = Api();
    const { _id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        productName: '',
        price: '',
        category: '',
        sizes: [],
        images: []
    });

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
        try {
            const { data } = await axios.get(`${api}/disproduct/${_id}`);
            console.log(data);
            
            setProduct(data);
        } catch (error) {
            console.log("Error fetching product details for edit:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${api}/editproduct/${_id}`, product);
            alert('Product updated successfully!');
            navigate(`/details/${_id}`);
        } catch (error) {
            console.log("Error updating product:", error);
            alert('Error updating product!');
        }
    };

    return (
        
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="productName" className="block text-lg font-semibold">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-lg font-semibold">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-lg font-semibold">Category</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="sizes" className="block text-lg font-semibold">Sizes (comma separated)</label>
                    <input
                        type="text"
                        id="sizes"
                        name="sizes"
                        value={product.sizes.join(', ')}
                        onChange={(e) => handleChange({ target: { name: 'sizes', value: e.target.value.split(', ') } })}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="images" className="block text-lg font-semibold">Images (comma separated URLs)</label>
                    <input
                        type="text"
                        id="images"
                        name="images"
                        value={product.images.join(', ')}
                        onChange={(e) => handleChange({ target: { name: 'images', value: e.target.value.split(', ') } })}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Update Product</button>
            </form>
        </div>
    );
};

export default EditProduct;
