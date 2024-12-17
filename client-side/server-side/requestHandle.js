import userSchema from "./models/user.model.js"
import pkg from "jsonwebtoken"
import bcrypt from "bcrypt"
import nodemailer from "nodemailer"
const {sign}=pkg

//mail transport
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "qrfs4444@gmail.com",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });



//seller and buyyer signUp
export async function signUp(req,res){
   const {username,email,password,cpassword,phone} =req.body
   if(!(username&&email&&password&&cpassword&&phone))
    return res.status(404).send({msg:"fields are empty "})
if(password!==cpassword)
    return res.status(404).send({msg:"the password doesn't match"})
const userr=await userSchema.findOne({phone})
if(userr)
    return res.status(404).send({msg:"user already existed"})
try{
 const hashedpwd=await bcrypt.hash(password,10)

 const user=await userSchema.create({username,email,phone,password:hashedpwd});
 res.status(201).send({msg:"created sucessfully",user})
}catch(error){
    console.log(error);
    res.status(404).send({msg:"failed to register"}) 
}
}
//seller and buyyer login
export async function SignIn(req,res){
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
    const token= sign({userId:use.id},process.env.Key,{expiresIn:"24h"})
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
        subject: "Hello ✔", // Subject line
        text: "mail verification", // plain text body
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
                <a href="http://localhost:3000/signup" class="btn">Verify Your Account</a>
            </div>
        
        </body>
        </html>`, // html body
              });
            //   console.log("Message sent: %s", info.messageId)
res.status(201).send({msg:"Confirmation mail successfully sent"});
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"email verification failed"})    
    }
}



//to delete seller details
export async function deleteUser(req,res){
try{
  const {_id}=req.params
  await userSchema.deleteOne({_id})
  res.status(200).send({msg:"deleted sucessfully"})
}catch(error){
    console.log(error);
    res.status(404).send({msg:"deletion is failed"})
}
}
 