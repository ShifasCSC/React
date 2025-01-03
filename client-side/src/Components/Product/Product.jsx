import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Api from '../Api';

const Products = () => {
    const api=Api()
    const {_id}=useParams()
    const [products, setProducts] = useState([]);
    const {category}=useParams()

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // products
        const {data}=await axios.get(`${api}/getcatproducts/${category}`)
        setProducts(data)
    };
    // const handleDelete=async()=>{
    //     try{
    //     const res=await axios.delete(`${api}/delproduct/${_id}`)
    //     console.log(res);
        
    //     }catch(error){
    //         console.log(error);
            
    //     }
    // }
    // console.log(category);
    
  return (
    <>
    <div className="flex flex-wrap justify-center">
                    {products.map((prod,index) =>
                    <>
                        <Link to={`/details/${prod._id}`} key={index}>
                             <div className="w-full sm:w-48 md:w-56 lg:w-64 h-56 border border-gray-300 p-4 m-2 shadow-lg">
                                <img src={prod.images[0]||prod.images} alt="Post" className="w-full h-4/6 object-cover border rounded-md" />
                                <div className='flex flex-wrap justify-between mt-4'>
                                <p className='text-center text-sm text-blue-600 font-semibold '>{prod.productName}</p>
                                <p className='text-center text-sm font-semibold text-green-600 '>${prod.price}</p>
                                </div>
                               
                             </div>
                         </Link>
                    </>
                )}
                </div>
    </>
  )
}

export default Products