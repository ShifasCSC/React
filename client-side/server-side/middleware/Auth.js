import pkg from "jsonwebtoken"

const {verify}=pkg

export default async function Auth(req,res,next){
    try{
        const key=await req.headers.authorization
        if(!key)
            return res.status(403).send({msg:"unauthorised acess"})
        console.log(key);
        const token=await key.split("")[1]
        console.log(token);
        const auth=await verify(token,process.env.KEY)
        console.log(auth);
         req.user=auth;
         next() 
    }catch(error){
        console.log(error);
        
    }
}
