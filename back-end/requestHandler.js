import menuSchema from "./models/menu.model.js"
import menuItemSchema from "./models/menuItem.model.js"

export async function addMenu(req,res){
    try{
        
const { name,description,price,category,menuId}=req.body
const item= await menuItemSchema.findOne({menuId})
if(item)
    return res.status(404).send({msg:"menu item already exist"})
const menuitem=await menuItemSchema.create(name,description,price,category,menuId)
res.status(201).send({msg:"menu item creates successfullu",menuitem})
}catch(err){
        res.status(500).send({msg:"menu item failed to  create"})
console.log(err);

    }
}