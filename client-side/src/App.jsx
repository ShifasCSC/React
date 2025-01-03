import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Email from './Components/Email/Email'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Sell from './Components/Sell/Sell'
import AddProduct from './Components/AddProduct/AddProduct'
import Products from './Components/Product/Product'
import EditComapany from './Components/Sell/EditCompany'
import ProductDetails from './Components/Product/Details'
import EditProduct from './Components/Product/Edit'
import Orders from './Components/Orders/Orders'
import Wishlist from './Components/Whishlist/Wishlist'
import Cart from './Components/Cart/Cart'


function App() {
  const [user,setUser]=useState("")
 
  return (
    <>
   <BrowserRouter>
   {user && <Nav user={user} setUser={setUser} />}
   <Routes>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
    <Route path='/email' element={<Email/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/sell' element={<Sell/>}/>
    <Route path="/addproduct" element={<AddProduct/>}/>
    <Route path="/editcompany" element={<EditComapany/>}/>
    <Route path="/products/:category" element={<Products/>}/>
    <Route path="/details/:_id" element={<ProductDetails user={user} setUser={setUser}/>}/>
    <Route path='/editdetails/:_id' element={<EditProduct/>}/>

    <Route path='/' element={<Home setUser={setUser}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
