import userSchema from "./models/user.model.js"

export async function setUser(req,res){
    try{
const { username,email,phone,designation}=req.body
if(!(username&&email&&phone&&designation))
    return res.status(400).send({msg:"input fields are empty"})
const eml=await userSchema.findOne({email})
if(eml)
    return res.status(400).send({msg:"user already existed"})
const user= await userSchema.create({email, username,phone,designation})
return res.status(201).send({msg:"user created succesfully"})
    }catch(error){
        console.log(error);
        
    }
}
export async function getUser(req,res){
    try{
const {_id}=req.params
if(!_id)
    return res.status(400).send({msg:"user id not find"})
const user= await userSchema.findOne({_id})
return res.status(200).send({msg:"user founded",user})
}catch(error){
    console.log(error);
    return res.status(500).send({msg:"user data not founded"})
    
}
}

export async function deleteUser(req,res){
    try{
const {_id}=req.params
if(!_id)
    return res.status(400).send({msg:"user id not find"})
const user= await userSchema.deleteOne({_id})
return res.status(200).send({msg:"user data deleted"})
}catch(error){
    console.log(error);
    return res.status(500).send({msg:"user data failed to delete"})
    
}
}

export async function getUsers(req,res){
 try{
const user= await userSchema.find()
return res.status(200).send({msg:"users data found",user})
}catch(error){
        return res.status(500).send({msg:"users data not founded"})
        console.log(error);
        
    }
}
export async function editUser(req,res){
    try{
        const {_id}=req.params
const { username,email,phone,designation}=req.body

const user= await userSchema.updateOne({_id},{$set:{email, username,phone,designation}})
const edit= await userSchema.findByIdAndUpdate(_id,{email, username,phone,designation},{new:true})
return res.status(201).send({msg:"user data edited succesfully",edit})
}catch(error){
    return res.status(500).send({msg:"user data edited failed"})
    console.log(error);
        
    }
}