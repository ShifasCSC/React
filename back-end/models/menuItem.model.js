import mongoose, { Schema } from "mongoose";

const menuItemSchema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    category:{type:String},
    menuId:{type:Schema.Types.ObjectId,ref:'Menu'}
})
export default mongoose.models.MenuItem||mongoose.model("MenuItem",menuItemSchema)