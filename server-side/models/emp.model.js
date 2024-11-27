import mongoose from "mongoose";
const  empSchema=new mongoose.Schema({
    name:{type:String},
    gender:{type:String},
    age:{type:Number},
    email:{type:String},
    place:{type:String},
    phone:{type:Number},
    experience:{type:Number},
    designation:{type:String},
    salary:{type:Number},
    profile:{type:String}
})
export default mongoose.model.emp||mongoose.model("emp",empSchema)