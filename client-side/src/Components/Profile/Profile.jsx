import React from 'react'
import "./Profile.scss"
import axios from 'axios';
import Api from '../Api';
import { useState,useEffect } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';

function Profile({user,setUser}) {
  const api=Api()
  const navigate=useNavigate()
  const [currentView, setCurrentView] = useState('profile'); // Track current view (profile, address, add address)
  const [dropdownStates, setDropdownStates] = useState([]); // Dropdown state for each address

  const [addressData, setAddressData] = useState([]);

  const [userData, setUserData] = useState({});
  const [address, setAddress] = useState({
    place: "",
    pincode: "",
    city: ""
  });
  const { _id } = useParams();
  const token = localStorage.getItem("token");

  const [isManagingAddresses, setIsManagingAddresses] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false); // State to toggle edit mode for profile

  const [addressAdded, setAddressAdded] = useState(false); // State to track if address is added

  const handleManageAddressesClick = () => {
    setIsManagingAddresses(true);
  };

  const handleProfileInformationClick = () => {
    setIsManagingAddresses(false);
  };

  const handleEditClick = () => {
    setIsEditingProfile(true); // Enable editing
  };

  const handleSaveClick = async (e) => {
    setIsEditingProfile(false); // Disable editing
    // You can add save functionality here (e.g., save the data to backend)
    e.preventDefault();
    const res = await axios.put(
      `${api}/edituser`,
      userData,
      { headers: { "Authorization": `Bearer ${token}` } }
    );
    console.log(res);
  };

  const handleSaveAddress = async () => {
    try{

      setAddressAdded(true);
      const res = await axios.post(
      `${api}/addaddr`,
      address,
      { headers: {"Authorization": `Bearer ${token}` } }
    );
    console.log(res);
    alert(res.data.msg)
  }catch(error){
    console.log(error);
    
    
  }
  };

  const handleDeleteAddress = async () => {
    try {
      const res = await axios.delete(
        `${api}/deladdr`, 
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      setAddress({ place: "", city: "", pincode: "" }); // Clear address from state
      setAddressAdded(false); // Mark address as deleted
      console.log(res);
    } catch (error) {
      console.log("Error deleting address:", error);
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const res = await axios.delete(`${api}/delete`,{headers:{ "Authorization": `Bearer ${token}`}}
      );
      console.log(res);
      if(res.status==200){
       confirm("do you want to delete?")
       localStorage.removeItem('token')
        alert(res.data.msg)
        navigate("/signin")
      }
      // Optionally, you can log out the user or redirect them after deleting their profile
    } catch (error) {
      console.log("Error deleting profile:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchAddre();
    console.log(addressData);
  }, []);

  const fetchAddre=async()=>{
    try{
      const res = await axios.get(`${api}/dispaddr`, { headers: { "Authorization": `Bearer ${token}` } })
      setAddressData(res.data);
      setDropdownStates(new Array(data.length).fill(false)); // Initialize dropdown states for each address
  
      
    }catch(error){
      console.log(error);
      
    }
  }
  const fetchData = async () => {
    try {
      const res = await axios.get(`${api}/disp`, 
        { headers: { "Authorization": `Bearer ${token}` } }
      );
      console.log(res.data.user.email);
      
      setUserData(res.data.user);
      setUser(res.data.user)
    } catch (error) {
      console.log(error);
    }
  };
  const addrhandleClick = () => {
    handleAddrSubmit();
  };

  const handleAddrSubmit = async () => {
    const { data } = await axios.post(`${api}/address`, newAddress);
    alert(data.msg);
    setAddress({
      place: '',
      house: '',
      pincode: '',
    });
    fetchAddre(); // Fetch updated address list after adding new address
    setCurrentView('address');
  };

  

  const handleChange = (e) => {
    setUserData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleAddressChange = (e) => {
    setAddress((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

    
  return (
    <>
     
    <div className="min-w-screen min-h-screen bg-gray-100 py-4">
      <div className=" mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {/* Sidebar */}
          <div id='pro' className="w-96 bg-sky-900 p-8 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-32 h-32 rounded-full object-cover"
                src={userData.profile}
                alt="Profile"
              />
               <h1 className="text-xl font-semibold text-white  underline-offset-4 decoration-1 decoration-solid decoration-sky-300 underline"><span className='text-2xl'> Hi, </span>{userData.username}</h1>
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
                {addressAdded ? 'Manage Address' : 'Manage Address'}
              </button>
            </div>
          </div>

          {/* Profile Content or Manage Addresses Content */}
          <div className=" w-full bg-white p-6 rounded-lg shadow-md">
            {isManagingAddresses ? (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Address details</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Place</h4>
                    <input
                      type="text"
                      value={address.place||""}
                      onChange={handleAddressChange}
                      name="place"
                      placeholder="Enter place"
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">City</h4>
                    <input
                      type="text"
                      name="city"
                      value={address.city||""}
                      placeholder="Enter City"
                      onChange={handleAddressChange}
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Pincode</h4>
                    <input
                      type="text"
                      value={address.pincode||""}
                      onChange={handleAddressChange}
                      name="pincode"
                      placeholder="Enter pincode"
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>
                {addressAdded ? (
                  <button
                    onClick={handleSaveAddress}
                    className="mt-6 mx-5 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                  >
                    Edit Address
                  </button>
                ) : (
                  <button
                    onClick={addrhandleClick}
                    className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
                  >
                    Save Address
                  </button>
                )}
                <button
                  onClick={handleDeleteAddress}
                  className="mt-6 mx-5 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
                >
                  Delete Address
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">Profile Data</h3>
                 {/* Sell Button positioned in the top-right corner */}
                <Link to={'/company'}>
                <button
                 
                 className="absolute top-30 right-40 px-6 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-300 hover:text-black transition-all duration-200"
               >
                 Sell
               </button>
                </Link>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-lg font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      name="username"
                      value={user.username||""}
                      
                      disabled={!isEditingProfile} // Disable the input when not editing
                      className="block py-2 text-xl pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-lg font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      onChange={handleChange}
                      name="email"
                      value={user.email||""}
                    
                      disabled={!isEditingProfile} // Disable the input when not editing
                      className="block py-2 pl-2 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Phone</h4>
                    <input
                      type="text"
                      value={user.phone||""}
                      name="phone"
                      onChange={handleChange}
                      disabled={!isEditingProfile} // Disable the input when not editing
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
                    className="mt-6 mx-5 px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-slate-300 hover:text-black transition-all duration-200"
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
    </>
  )
}

export default Profile