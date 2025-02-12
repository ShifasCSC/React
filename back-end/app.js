
import express from "express"
import router from "./router.js"
import Connection from "./connection.js"
import cors from "cors"
import env from "dotenv"
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