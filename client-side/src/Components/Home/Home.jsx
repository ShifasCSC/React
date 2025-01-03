import axios from "axios";
import React, { useEffect, useState} from "react";
import Api from "../Api"
import { useNavigate,Link } from "react-router-dom";
const Home = ({setUser})=>{
    const [products,setProducts]=useState([])
    const api=Api()
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    useEffect(()=>{
        if(token){
            getUser()
            getProducts()
        }else{
         navigate("/signin")
        }
    },[token])
    const getUser=async()=>{
        if(token){
            try{
               const res=await axios.get(`${api}/disp`,{headers:{"Authorization":`Bearer ${token}`}})
               console.log(res.data);
               
               setUser({username:res.data.user.username,profile:res.data.user.profile,acctype:res.data.user.acctype, res})
               
            }catch(error){
                console.log(error);
                alert(error.data)  
            }
        }
    }
    //to display the products
    const getProducts = async () => {
        try {
            const res = await axios.get(`${api}/getproducts`);
            console.log("Response from API:", res.data[0].productName); // Log the response to check its structure
    
            // Check if the response data is an array
            // if (Array.isArray(res.data)) {
                setProducts(res.data);
            // } else {
            //     // console.error("Expected an array of products, but got:", res.data);
            //     setProducts([]);  // Fallback to empty array if not an array
            // }
        } catch (error) {
            console.log(error);
            setProducts([]);  // Ensure that products is an array even in case of error
        }
    };
    
    return (
        <>
            <div className="home flex flex-wrap justify-between p-10">
                {products.map((prod, index) => {
                     console.log("Product:", prod);  // Log each product to inspect its structure
                    return (
                        <Link to={`/details/${prod._id}`} key={index}>
                            <div className="w-full mt-5 sm:w-48 md:w-56 lg:w-64 h-56 border border-gray-300 p-4 m-2 shadow-lg">
                                {/* Ensure images is an array and has at least one item */}
                                {prod.images && prod.images.length > 0 ? (
                                    <img src={prod.images[0]} alt="Post" className="w-full h-4/6 bg-fixed bg-cover object-cover border rounded-md" />
                                ) : (
                                    <div className="w-full h-4/6 bg-gray-300 flex items-center justify-center text-white">No Image</div>
                                )}
                                <div className='flex flex-wrap justify-between mt-4'>
                                    {/* Ensure productName exists */}
                                    <p className='text-center text-sm text-blue-800 text-l   font-bold'>
                                        {prod.productName || "Unnamed Product"}
                                    </p>
                                    {/* Ensure price exists */}
                                    <p className='text-center text-sm font-semibold text-green-600'>
                                        ${prod.price || "0.00"}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
    
}
export default Home