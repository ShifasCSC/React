import express from "express"
import Connection from "./connection.js"
import env from "dotenv"
import router from "./router.js"
import cors from "cors"
env.config()

const app=express()


app.use(cors())
app.use(express.json({limit:"50mb"}))
 app.use("/api",router)


 
Connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);   
    })
}).catch((error)=>{
    console.log(error);
    
})