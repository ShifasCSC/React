import mongoose, { Schema } from "mongoose";

const menuSchema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    items:[{type:Schema.Types.ObjectId,ref:'MenuItem'}]
})
export default mongoose.models.Menu||mongoose.model("Menu",menuSchema);
