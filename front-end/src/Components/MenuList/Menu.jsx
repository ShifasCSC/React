import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Menu.css"; 

const Menu = () => {
  const { category } = useParams(); 
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getmenu/${category}`)
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => {
        console.log("Error fetching menu:", err);
      });
  }, [category]);

  return (
    <div className="menu-container">
      <h2>Menu Items for your category</h2>
      
      <table className="menu-table">
        <thead>
          <tr>
            <th>Menu Item</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <tr key={item._id}>
                <td><b>{item.name}</b></td>
                <td>{item.description}</td>
                <td>${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No menu items found for this category.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
