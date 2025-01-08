import userSchema from "./models/user.model.js"
import addresSchema from "./models/address.model.js"
import companySchema from "./models/company.model.js"
import productSchema from "./models/product.model.js"
import categorySchema from "./models/category.model.js"
import wishlistSchema from "./models/wishList.model.js";
import cartSchema from "./models/cart.model.js"
import pkg from "jsonwebtoken"
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"


const {sign}=pkg

//mail transport
const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for port 465, false for other ports
    service:"gmail",
    auth: {
      user: "qrfs4444@gmail.com",
      pass: "qetf gphp xrgt penw",
    },
  });



//seller and buyyer signUp
export async function signUp(req,res){
   const {username,email,password,cpassword,phone,acctype,profile} =req.body
   if(!(username&&email&&password&&cpassword&&phone&&acctype))
    return res.status(404).send({msg:"fields are empty "})
if(password!==cpassword)
    return res.status(404).send({msg:"the password doesn't match"})
const userr=await userSchema.findOne({phone})
if(userr)
    return res.status(404).send({msg:"user already existed"})
try{
 const hashedpwd=await bcrypt.hash(password,10)
 const user=await userSchema.create({username,email,phone,password:hashedpwd,acctype,profile});
 res.status(201).send({msg:"created sucessfully",user})
}catch(error){
    console.log(error);
    res.status(404).send({msg:"failed to register"}) 
}
}
//seller and buyyer login
export async function signIn(req,res){
    try{
       const {email,password}=req.body
       if(!(email&&password))
        return res.status(404).send({msg:"fields are empty"})
    const use=await userSchema.findOne({email})
    if(!use)
        return res.status(404).send({msg:"invalid email"})
    const sucess=await bcrypt.compare(password,use.password)
    if(!sucess)
        return res.status(404).send({msg:"password does'nt match"})
    const token= sign({userId:use.id},process.env.Key,{expiresIn:"7d"})
    console.log(token);
    res.status(200).send({msg:"sucessfully logedIn",token})
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"logIn failed"})
        
    }
}
//verify email
export async function mail(req,res){
    try{
     const {email}=req.body
     
     const info = await transporter.sendMail({
        from: 'qrfs4444@gmail.com', // sender address
        to: `${email}`, // list of receivers
        subject: "for your email verification", // Subject line
        text: "confirmation", // plain text body
        html:  `<!DOCTYPE html>
        
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Account Verification</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .email-container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    border: 1px solid #ddd;
                    padding: 20px;
                    border-radius: 8px;
                    text-align: center;
                }
                .btn {
                    display: inline-block;
                    background-color: #000000;
                    color: #ffffff;
                    text-decoration: none;
                    padding: 15px 30px;
                    margin-top: 20px;
                    border-radius: 4px;
                    font-size: 18px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
        
            <div class="email-container">
                <p>Hello,</p>
                <p>Please verify your email address by clicking the button below.</p>
                <a href="http://localhost:5173/signup" class="btn">Verify Your Account</a>
            </div>
        
        </body>
        </html>`, // html body
              });
            //   console.log("Message sent: %s", info.messageId)
res.status(200).send({msg:"Confirmation mail successfully sent",email});
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"email verification failed"})    
    }
}


//display the user
export async function dispUser(req,res){
    try{
        
        const _id=req.user
        console.log(_id);
        const user= await userSchema.findOne({_id})
        res.status(200).send({user})
        
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"user not found"})
        
    }
}
//to edit details
export async function editUser(req,res){
    try{
    const _id=req.user
    const {username,phone,email}=req.body
    const edit=await userSchema.updateOne({_id},{$set:{username,phone,email}})
    res.status(201).send({msg:"successfully updated",edit})
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"failed to update the data"})   
    }
}

//to delete seller details
export async function deleteUser(req,res){
try{
  const _id=req.user
  await userSchema.deleteOne({_id})
  res.status(200).send({msg:"deleted sucessfully"})
}catch(error){
    console.log(error);
    res.status(404).send({msg:"deletion is failed"})
}
}
//ADDRESS SCHEMA
// add adress
export async function addAddress(req,res){
    try{
        const _id=req.user
    const {place,pincode,city}=req.body
        const data=await addresSchema.findOne({place,pincode,city})
        if(data){
         return res.status(400).send({msg:"address already created"})
     }
       const address= await addresSchema.create({userID:_id,place,pincode,city})
       return res.status(201).send({msg:"create sucessfully",address})
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"cannot create address data"})                  
}
}

//display address
export async function displayAddress(req,res) {
    try {
        const _id=req.user
        const address=await addresSchema.find({userID:_id})
        res.status(200).send({msg:"sucess",address})
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})    
    }
}

//update addr
export async function updateAddress(req,res){
    try{
     const _id=req.user
    const {place,pincode,city}=req.body
        await addresSchema.updateOne({userID:_id},{$set:{place,pincode,city}})
            res.status(200).send({msg:"updated sucessfully"})
    }catch(error){
        console.log(error);            
    res.status(404).send({msg:"cannot create data"})
}
}

//delete address
export async function deleteAddress(req,res){
    try{
     const _id=req.user
        await addresSchema.deleteOne({userID:_id})
            res.status(200).send({msg:"deleted sucessfully"})
    }catch(error){
        console.log(error);            
    res.status(404).send({msg:"cannot delete data"})
}
}



// company details
export async function editComapany(req,res){
    try {
        const{name,email,phone,place}=req.body
        // console.log(username,email)
        const _id=req.user
        // console.log(_id);
        const user=await companySchema.findOne({userID:_id})
        // console.log(user);
        if(!user){
            await companySchema.create({name,email,phone,place,userID:_id}).then(()=>{
               return res.status(201).send({msg:"Successfully Added"})
            }).catch((error)=>{
                console.log(error);
                res.status(404).send({msg:error})    
            })
        }
        else{
            await companySchema.updateOne({userID:_id},{$set:{name,email,phone,place}}).then(()=>{
               return res.status(201).send({msg:"Successfully Updated"})
            }).catch((error)=>{
                console.log(error);
                res.status(404).send({msg:error})    
            })
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})      
    }
}
export async function getCompany(req,res){
    try {
    //    console.log(req.user.userId);
       const userID=req.user
       const companyData= await companySchema.findOne({userID})
    //    console.log(companyData);
       res.status(200).send(companyData)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}
// add category

export async function category(req,res){
    try {
        const{newCategory}=req.body
        await categorySchema.create({category:newCategory}).then(()=>{
            return res.status(201).send({msg:"Category Added"})
         }).catch((error)=>{
             console.log(error);
             res.status(404).send({msg:error})    
         })
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}
export async function getCategory(req,res){
    try {
       const category= await categorySchema.find()
       res.status(200).send(category)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}
// add products
export async function addProduct(req,res){
    try {
        const id=req.user.userId
        const{sellerId,productName,price,sizes,category,images}=req.body
        await productSchema.create({sellerId:id,productName,price,sizes,category,images}).then(()=>{
            return res.status(201).send({msg:"Product Added"})
         }).catch((error)=>{
             console.log(error);
             res.status(404).send({msg:error})    
         })
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}
//delete the product
export async function delProduct(req,res){
    try {
        const {_id}=req.params
        const products= await productSchema.deleteOne({_id})
       res.status(200).send({msg:"deleted succesfully"})
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}
//display product
export async function getProducts(req,res){
    try {
        const products= await productSchema.find()
       res.status(200).send(products)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}

//edit product
export async function editProduct(req,res){
    try{
     const {productName,price,sizes,category,images}=req.body
     const {_id}=req.params
     const pro=await productSchema.updateOne({_id},{$set:{productName,price,sizes,category,images}})
     res.status(201).send({msg:"update sucess",pro})
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"update failed"})
        
    }
}

//display single product
export async function disProduct(req,res){
    try{
        const {_id} =req.params
       const pro=await productSchema.findOne({_id})
        res.status(200).send(pro)
    }catch(error){
        console.log(error);
res.status(404).send({msg:"failed to display data"})
        
    }
}

// to display cartegory products
export async function getCatProducts(req,res){
    try {
        const{category}=req.params
        const products= await productSchema.find({category})
        res.status(200).send(products)
    } catch (error) {
        console.log(error);
        res.status(404).send({msg:error})            
    }
}


//WISHLIST

//to add products into wishlist
export async function addWish(req,res) {
    // try {
    //     const {id}=req.params;
    //     const _id=req.user;
    //     const user=await userSchema.findOne({_id})
    //     console.log(id);
        
    //     if(!user)
    //         return res.status(403).send({msg:"Unauthorized acces"});
    //     const product= await wishlistSchema.findOne({id})
    //     if(product)
    //     return res.status(404).send({msg:"product is already existed in your wishlist"})
    //     const wishlist=await wishlistSchema.create({buyerId:_id,productId:id});
    //     return res.status(201).send({msg:"success",wishlist});
    // } catch (error) {
    //     return res.status(404).send({msg:"error"})
    // }
    try {
        const _id = req.user.userId;  // Assuming req.user is set by your authentication middleware
        const { id } = req.params;

        // Check if the product is already in the wishlist
        const existingItem = await wishlistSchema.findOne({ buyerId: _id, productId:id });
        if (existingItem) {
            return res.status(400).send({ msg: "Product is already in your wishlist" });
        }

        // Add product to the wishlist
        const newItem = new wishlistSchema({ buyerId: _id, productId:id });
        await newItem.save();
        return res.status(201).send({ msg: "Product added to wishlist" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Error adding to wishlist" });
    }
}




//remove from wishlist
// Remove from wishlist
export async function remWish(req, res) {
    try {
        const _id = req.user.userId;  // Assuming req.user is set by your authentication middleware
        const { id } = req.params;

        // Remove the product from the wishlist
        const removed = await wishlistSchema.deleteOne({ buyerId: _id, productId:id });
        if (removed.deletedCount === 0) {
            return res.status(404).send({ msg: "Product not found in wishlist" });
        }

        return res.status(200).send({ msg: "Product removed from wishlist" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Error removing from wishlist" });
    }
}
//check whether the product is in wish list or not
// Check if product is in the wishlist
export async function checkWish(req, res) {
    try {
        const _id = req.user.userId;  // Assuming req.user is set by your authentication middleware
        const { id } = req.params;  // Product ID from URL parameters
        // console.log(_id);
        // console.log(id);
        
        // Check if the product is in the user's wishlist
        const existingItem = await wishlistSchema.findOne({ buyerId: _id, productId: id });

        if (existingItem) {
            return res.status(200).send({ isInWishlist: true });
        }

        return res.status(200).send({ isInWishlist: false });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Error checking wishlist status" });
    }
}


// Get user's wishlist and product details
export async function getWish(req, res) {
    try {
        const _id = req.user.userId;  // Assuming req.user is set by your authentication middleware
        const { productId } = req.body;
        console.log(productId);
        

        // Check if the product exists in the wishlist
        // const item = await wishlistSchema.find({ buyerId: _id });
        // if (item) {
        //     return res.status(200).send({ isInWishlist: true });
        // }

        // return res.status(200).send({ isInWishlist: false });
        const wishlist=await wishlistSchema.find({buyerId:_id,productId})
        // Fetch product details for each item in the wishlist
        const productPromises = wishlist.map(async (list) => {
            return await productSchema.findOne({ _id: list.productId });
        });
        const products = await Promise.all(productPromises);
         console.log(_id);
         
        res.status(200).send({msg:"sucess",products})
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Error checking wishlist" });
    }
}


//cart section
export async function addToCart(req, res) {
    try {
        const cart = req.body;
        const userId = req.user.userId; // Assuming user authentication middleware sets req.user

        // Save cart item
        const data = await cartSchema.create({ buyerId: userId, ...cart });
        return res.status(201).send({ msg: "Added to Cart" });
    } catch (error) {
        return res.status(404).send({ msg: "Error adding to cart" });
    }
}

export async function getCart(req, res) {
    try {
        const userId = req.user.userId; // Assuming user authentication middleware sets req.user
        const user = await loginSchema.findOne({ _id: userId });

        if (!user) {
            return res.status(403).send({ msg: "Unauthorized access" });
        }

        // Fetch cart items and user address
        const cart = await cartSchema.find({ buyerId: userId });
        const addresses = await addressSchema.findOne({ userId: userId }, { addresses: 1 });

        return res.status(200).send({ username: user.username, role: user.role, cart, addresses });
    } catch (error) {
        return res.status(404).send({ msg: "Error fetching cart" });
    }
}