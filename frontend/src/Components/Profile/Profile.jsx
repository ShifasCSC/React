import React, { useState, useEffect } from "react";
import { FaCamera} from "react-icons/fa";
import { FiCheck, FiX, FiEdit } from "react-icons/fi";
import axios from "axios";
import route from "../route";
import "./Profile.scss";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const value = localStorage.getItem("Auth");
  const [profile, setProfile] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [isUEdit, setIsUEdit] = useState(false);
  const [isPEdit, setIsPEdit] = useState(false);
  const [isEEdit, setIsEEdit] = useState(false);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const { status, data } = await axios.get(`${route()}profile`, {
        headers: { Authorization: `Bearer ${value}` },
      });
      if (status === 200) {
        setEmail(data.email);
        setUsername(data.username);
        setPhone(data.phone);
        setProfile(data.profile);
      } else {
        alert(data.msg);
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    }
  };

  // Edit functions
  const handleImageChange = async (e) => {
    const profile = await convertToBase64(e.target.files[0]);
    setProfile(profile);
    const { status, data } = await axios.put(`${route()}editdetails`, { profile }, { headers: { Authorization: `Bearer ${value}` } });
    if (status === 201) {
      if (data.msg === "success") {
        alert("Photo edited");
        getDetails();
      }
    }
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Save changes functions
  const handleSaveName = async () => {
    const { status, data } = await axios.put(`${route()}editdetails`, { username }, { headers: { Authorization: `Bearer ${value}` } });
    if (status === 201) {
      if (data.msg === "success") {
        alert("Name edited");
        getDetails();
      }
    }
  };

  const handleSavePhone = async () => {
    const { status, data } = await axios.put(`${route()}editdetails`, { phone }, { headers: { Authorization: `Bearer ${value}` } });
    if (status === 201) {
      if (data.msg === "success") {
        alert("Phone edited");
        getDetails();
      }
    }
  };

  const handleSaveEmail = async () => {
    const { status, data } = await axios.put(`${route()}editdetails`, { email }, { headers: { Authorization: `Bearer ${value}` } });
    if (status === 201) {
      if (data.msg === "success") {
        alert("Email edited");
        getDetails();
      }
    }
  };

  return (
    <div className="Profile">
      <Nav />
      <div className="profile-card">
        <div className="avatar">
          <div className="img_container">
            <div className="hover-effect"></div>
            <img className="avatar-image" src={profile} alt="Avatar" />
            <label htmlFor="image-upload" className="edit-icon">
              <FaCamera />
            </label>
            <input
              id="image-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="profile-details">
          <div className="headings">
           <label htmlFor="username">name:</label>
            <input
              type="text"
              value={username}
              onChange={handleNameChange}
              className="edit-input"
              disabled={!isUEdit}
            />
            {isUEdit ? (
              <button className="save-btn">
                <FiCheck onClick={handleSaveName} color="green" />{" "}
                <FiX onClick={() => setIsUEdit(!isUEdit)} color="red" />
              </button>
            ) : (
              <button className="save-btn">
                <FiEdit onClick={() => setIsUEdit(!isUEdit)} />
              </button>
            )}
          </div>

          <div className="contact-info">
            <ul>
              <li>
                <label htmlFor="email">email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  className="edit-input"
                  disabled={!isEEdit}
                />
                {isEEdit ? (
                  <button className="save-btn">
                    <FiCheck onClick={handleSaveEmail} color="green" />{" "}
                    <FiX onClick={() => setIsEEdit(!isEEdit)} color="red" />
                  </button>
                ) : (
                  <button className="save-btn">
                    <FiEdit onClick={() => setIsEEdit(!isEEdit)} />
                  </button>
                )}
              </li>
              <li>
                <label htmlFor="phone">phone:</label>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="edit-input"
                  disabled={!isPEdit}
                />
                {isPEdit ? (
                  <button className="save-btn">
                    <FiCheck onClick={handleSavePhone} color="green" />{" "}
                    <FiX onClick={() => setIsPEdit(!isPEdit)} color="red" />
                  </button>
                ) : (
                  <button className="save-btn">
                    <FiEdit onClick={() => setIsPEdit(!isPEdit)} />
                  </button>
                )}
              </li>
            </ul>
          </div>

          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
