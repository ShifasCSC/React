import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./Home.css"; 

function Home() {
    const [cate, setCategory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/getcate`)
            .then((res) => {
                if (res.status === 200) {
                    setCategory(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='home-container'>
            <h1>Menu Categories</h1>
            <button className="add-menu-btn" onClick={() => navigate("/addmenu")}>
                Add Menu
            </button>
            <ol className="category-list">
                {cate.map((category, index) => (
                    <li key={index} className="category-item">
                        <Link to={`/Menu/${category._id}`} className="category-link">
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Home;
