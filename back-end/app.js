import express from "express"
import router from "./router.js"
import Connection from "./connection.js"
import cors from "cors"
import env from "dotenv"
env.config()
const app =express()

app.use(express.json())
app.use(cors())
app.use("/api",router)

Connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    })
}).catch((error)=>{
    console.log(error);
    
})