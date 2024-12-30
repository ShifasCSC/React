import React, { useState, useEffect } from 'react';
import "./Profile.scss";
import axios from 'axios';
import Api from '../Api';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Profile({ user, setUser }) {
  const api = Api();
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('profile');
  const [dropdownStates, setDropdownStates] = useState([]);
  const [addressData, setAddressData] = useState([]);
  const [userData, setUserData] = useState({});
  const [address, setAddress] = useState({ place: "", pincode: "", city: "" });
  const { _id } = useParams();
  const token = localStorage.getItem("token");
  const [isManagingAddresses, setIsManagingAddresses] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [addressAdded, setAddressAdded] = useState(false);
  const [editAddress, setEditAddress] = useState(null);  // To track which address is being edited

  const handleManageAddressesClick = () => {
    setIsManagingAddresses(true);
  };

  const handleProfileInformationClick = () => {
    setIsManagingAddresses(false);
  };

  const handleEditClick = () => {
    setIsEditingProfile(true);
  };

  //to delete profile data
  const handleDeleteProfile = async () => {
    try{
     const res=await axios.delete(`${api}/deladdr`, { headers: { "Authorization": `Bearer ${token}` } })
     if(res.status==200){
      confirm("really do you want to delete profile data")
      alert(res.data.msg)
      localStorage.removeItem('token')
      navigate('/signin')
     }
    } catch (error){
      console.log(error);
      alert(error)
    }
  }

  const handleSaveClick = async (e) => {
    e.preventDefault();
    setIsEditingProfile(false);
    try {
      const res = await axios.put(
        `${api}/edituser`,
        userData,
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      alert(res.data.msg);
    } catch (error) {
      console.log("Error saving profile:", error);
    }
  };

  const handleSaveAddress = async () => {
    try {
      setAddressAdded(true);
      const res = await axios.post(
        `${api}/addaddr`,
        address,
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      alert(res.data.msg);
      fetchAddressData(); // Re-fetch addresses after saving
    } catch (error) {
      console.log("Error adding address:", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const res = await axios.delete(
        `${api}/deladdr`,
        { headers: { "Authorization": `Bearer ${token}` }, data: { addressId } }
      );
      alert(res.data.msg);
      fetchAddressData(); // Re-fetch addresses after deleting
    } catch (error) {
      console.log("Error deleting address:", error);
    }
  };

  const handleEditAddress = (addressId) => {
    const addressToEdit = addressData.find(addr => addr._id === addressId);
    setEditAddress(addressToEdit);
    setAddress({ place: addressToEdit.place, pincode: addressToEdit.pincode, city: addressToEdit.city });
  };

  const handleSaveEditedAddress = async () => {
    try {
      const res = await axios.put(
        `${api}/uptaddr`,
        { addressId: editAddress._id, ...address },
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      alert(res.data.msg);
      fetchAddressData(); // Re-fetch addresses after editing
      setEditAddress(null); // Reset editing state
      setAddress({ place: "", pincode: "", city: "" }); // Reset form fields
    } catch (error) {
      console.log("Error updating address:", error);
    }
  };

  const fetchAddressData = async () => {
    try {
      const res = await axios.get(`${api}/dispaddr`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      setAddressData(res.data.address);
    } catch (error) {
      console.log("Error fetching addresses:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${api}/disp`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      setUserData(res.data.user);
      setUser(res.data.user);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchAddressData();
  }, []);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-100 py-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {/* Sidebar */}
          <div id="pro" className="w-96 bg-sky-900 p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={userData.profile}
                alt="Profile"
              />
              <h1 className="text-xl font-semibold text-white underline-offset-4 decoration-1 decoration-solid decoration-sky-300 underline">
                <span className="text-2xl">Hi, </span>{userData.username}
              </h1>
              <button
                onClick={handleProfileInformationClick}
                className="mt-4 px-6 py-2 bg-gray-500 text-white hover:text-black rounded-md hover:bg-slate-300 transition-all duration-200"
              >
                Profile details
              </button>
              <button
                onClick={handleManageAddressesClick}
                className="mt-4 px-6 py-2 bg-gray-500 text-white hover:text-black rounded-md hover:bg-slate-300 transition-all duration-200"
              >
                Manage Address
              </button>
            </div>
          </div>

          {/* Profile or Address Content */}
          <div className="w-full bg-white p-6 rounded-lg shadow-md">
            {isManagingAddresses ? (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Address Details</h3>
                
                {/* Add or Edit Address Form */}
                <div className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      name="place"
                      value={address.place}
                      onChange={handleAddressChange}
                      placeholder="Place"
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      placeholder="City"
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pincode"
                      value={address.pincode}
                      onChange={handleAddressChange}
                      placeholder="Pincode"
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                {/* Button to Save New Address or Edit Address */}
                {editAddress ? (
                  <button
                    onClick={handleSaveEditedAddress}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                  >
                    Save Edited Address
                  </button>
                ) : (
                  <button
                    onClick={handleSaveAddress}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                  >
                    Save Address
                  </button>
                )}

                {/* Display Existing Addresses */}
                <div className="mt-6">
                  {addressData.map((addr) => (
                    <div key={addr._id} className="flex justify-between items-center border-b-2 py-3">
                      <div>
                        <p>Place: {addr.place}, Pincode: {addr.pincode}, City: {addr.city}</p>
                      </div>
                      <div>
                        <button onClick={() => handleEditAddress(addr._id)} className="text-blue-600">
                          Edit
                        </button>
                        <button onClick={() => handleDeleteAddress(addr._id)} className="text-red-600 ml-3">
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Profile Data</h3>
                <Link to={'/company'}>
                  <button
                    className="absolute top-30 right-40 px-6 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-300 hover:text-black transition-all duration-200"
                  >
                    Sell
                  </button>
                </Link>
                <div className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                      disabled={!isEditingProfile}
                      className="block py-2 text-xl pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      disabled={!isEditingProfile}
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      disabled={!isEditingProfile}
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
                {isEditingProfile ? (
                  <button
                    onClick={handleSaveClick}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                  >
                    Save Changes
                  </button>
                ) : (
                  <button
                    onClick={handleEditClick}
                    className="mt-6 px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-slate-300 hover:text-black transition-all duration-200"
                  >
                    Edit Profile
                  </button>
                )}
                <button
                  onClick={handleDeleteProfile}
                  className="mt-6 mx-5 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
                >
                  Delete Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
