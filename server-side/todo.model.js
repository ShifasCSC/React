import mongoose from "mongoose";
import { type } from "os";

const todoSchema=new mongoose.Schema({
    task:{type:String}
})
export default mongoose.model.todos||mongoose.model("todo",todoSchema)