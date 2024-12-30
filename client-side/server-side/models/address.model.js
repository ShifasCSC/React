import mongoose from "mongoose";
const addresSchema=new mongoose.Schema({
    userID:{type:String},
    city:{type:String},
    place:{type:String},
    pincode:{type:Number}
})
export default mongoose.model.address||mongoose.model("address",addresSchema)