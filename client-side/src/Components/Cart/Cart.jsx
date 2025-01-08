// src/components/CartPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Api from '../Api';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [error, setError] = useState(null);
    const token=localStorage.getItem("token")
    useEffect(() => {
        // Fetch cart data from API
        const fetchCart = async () => {
            try {
                const response = await axios.get(`${Api()}/getcart`,{ headers:{ "Authorization":`Bearer ${token}`}})
                setCartItems(response.data.cart);
                setAddresses(response.data.addresses);
                const total = response.data.cart.reduce(
                    (acc, item) => acc + item.product.price * item.quantity,
                    0
                );
                setTotalPrice(total);
            } catch (err) {
                setError("Failed to fetch cart data");
            }
        };

        fetchCart();
    }, []);

    const handleCheckout = () => {
        // Handle checkout process here
    };

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="text-4xl font-semibold text-center mb-8">Shopping Cart</h1>
            {error && <div className="text-red-500 text-center">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item._id} className="border p-4 rounded-lg flex justify-between">
                            <div>
                                <h2 className="font-semibold">{item.product.name}</h2>
                                <p>{item.product.description}</p>
                                <p>Price: ${item.product.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                                <p>Total: ${item.product.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <div className="border p-4 rounded-lg">
                        <h2 className="font-semibold">Addresses</h2>
                        {addresses && addresses.length > 0 ? (
                            addresses.map((address, index) => (
                                <p key={index}>{address}</p>
                            ))
                        ) : (
                            <p>No addresses found</p>
                        )}
                    </div>
                    <div className="border p-4 rounded-lg">
                        <h2 className="font-semibold">Total: ${totalPrice}</h2>
                        <button
                            onClick={handleCheckout}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
