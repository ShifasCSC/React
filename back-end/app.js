import express from "express"
import router from "./router.js"
import Connection from "./connection.js"
import cors from "cors"
import env from "dotenv"
env.config()

const app=express()

app.use(express.json());
app.use("/api",router)
app.use(cors())

Connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    })
}).catch((err)=>{
    console.log(err);
    
})