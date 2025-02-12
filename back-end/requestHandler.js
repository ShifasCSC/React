import userSchema from "./models/user.model.js"

export async function setUser(req,res){
    try{
     const {username,email,phone}=req.body
     if(!(username&&email&&phone))
        return res.status(400).send({msg:"input fields are empty"})
     const user=await userSchema.findOne({email})
     if (user)
       return res.status(400).send({msg:"user already exist"})
    const create= await userSchema.create({username,email,phone})
    return res.status(201).send({msg:"user creation done successfully"})
}catch(error){
    console.log(error);
    return res.status(500).send({msg:"cannot create the user",error})
    
}
}

export async function getUser(req,res){
    try{
        const {_id}=req.params
        const user=await userSchema.findOne({_id})
        return res.status(200).send({msg:"user founded",user})
        
    }catch(error){
        console.log(error);
        return res.status(500).send({msg:"cannot find the user",error})
        
    }
}

export async function getUsers(req,res){
    try{
        const user=await userSchema.find()
        return res.status(200).send({msg:"users data founded",user})
        
    }catch(error){
        console.log(error);
        return res.status(500).send({msg:"cannot find the users datas",error})
        
    }
}

export async function updateUser(req,res){
    try{
        const {_id}=req.params
        const {username,email,phone}=req.body
        if(!_id)
            return res.status(400).send({msg:"user id is not defined or cannot can acessed"})
        const update=await userSchema.findByIdAndUpdate(_id,{username,email,phone},{new:true})
         res.status(200).send({msg:"update done sucessfully",update})
        if(!update)
            return res.status(400).send({msg:"user id cannot acessed so updation cause error"})
        
    }catch(error){
        console.log(error);
        
        return res.status(500).send({msg:"cannot update the user data",error})
    }
}

export async function deleteUser(req,res){
    try{
        const {_id}=req.params
        const find=await userSchema.findOne({_id})
        if (!find){
            return res.status(400).send({msg:"user id cannot exist so there is no user in this id"})     
        }else{
            const del=await userSchema.deleteOne({_id})
            return res.status(200).send({msg:"deleted successfully"})  
        }
    }catch(error){
        console.log(error);
        return res.status(500).send({msg:"cannot delete the user data",error})
        
    }
}