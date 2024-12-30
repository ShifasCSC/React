import pkg from "jsonwebtoken"
import userSchema from "../models/user.model.js"

const {verify}=pkg

export default async function Auth(req,res,next){
    try{
        const key= req.headers.authorization
        const token=await key.split(" ")[1]
        console.log(token);
        const auth= verify(token,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
        console.log(auth);
        const user=await userSchema.findOne({_id:auth.userId})
        if(!user){
            return res.status(403).send({msg:"unauthorised acess"})
        }  
         req.user=auth.userId
         next() 
    }catch(error){
        console.log(error);
        
    }
}
