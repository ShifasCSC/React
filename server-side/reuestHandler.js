import { log } from "console"
import todoSchema from "./todo.model.js"

export async function addTodo(req,res){
    try{
        const {task}=req.body
        await todoSchema.create({task}).then(()=>{
            res.status(201).send({msg:"sucessfully added"})
        }).catch((error)=>{
            res.status(404).send({msg:error})
        })

    }catch(error){
        console.log(error);
        
    }
}

export async function displayTodo(req,res){
    try{
    //  const{task}=req.body
     const data=await todoSchema.find()
     res.status(200).send(data)
    }catch(error){
        console.log(error);
        
    }
}

export async function deleteTodo(req,res){
    try{
        const _id=req.params
      await todoSchema.deleteOne({_id})
      res.status(201).send({msg:"sucessfully deleted"})
    }catch(error){
        res.status(404).send({msg:"cannot delete"})
        
    }
}