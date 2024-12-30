import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    cpassword:{type:String},
    phone:{type:String},
    acctype:{type:String},
    profile:{type:String}
})
export default mongoose.model.user||mongoose.model("user",userSchema)