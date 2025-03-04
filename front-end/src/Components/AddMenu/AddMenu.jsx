import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddMenu.css"; 

function AddMenu() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getcate")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log("Error fetching categories", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cate = category === "new" ? newCategory.trim() : category;

    if (!name.trim() || !description.trim() || !price || !cate) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/addmenu", {
        name,
        description,
        price,
        category: cate,
      });

      console.log("Menu Item Added:", response.data);

      if (category === "new") {
        setCategories([...categories, { _id: response.data.item._id, name: newCategory }]);
        setCategory(newCategory);
        setNewCategory(""); //to reset input field
      }

      setName("");
      setDescription("");
      setPrice("");
      setCategory("");

      navigate("/");
    } catch (err) {
      console.log("Error adding menu item", err);
    }
  };

  return (
    <div className="menu-container">
      <h1>Add Menu Item</h1>
      <form onSubmit={handleSubmit} className="menu-form">
        {/* category dropdown */}
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
              <option value="new">-- Add New Category --</option>
          {categories.map((cata) => (
            <option key={cata._id} value={cata.name}>
              {cata.name}
            </option>
          ))}
        </select>

        {/* show input field when add a new category */}
        {category === "new" && (
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Enter new category"
            required
          />
        )}

        <label>Item Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter item name" required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the item" required />

        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter the price" required />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddMenu;
