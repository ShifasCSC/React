
import categoryModel from "./models/category.model.js"
import menuItemModel from "./models/menuItem.model.js"


//to add a new menu item
export async function addMenu(req,res){
    try{
        
const { name,description,price,category}=req.body
if(!(name&&description&&price&&category))
    return res.status(400).send({msg:"input fields are required"})
    
let cate= await categoryModel.findOne({name:category})
if(!cate){
    cate= new categoryModel({name:category})
    await cate.save()

}
let item= new menuItemModel({name,description,price,category:cate._id});
await item.save();
res.status(201).send({msg:"menu item creates successfully",item})

}catch(err){
        res.status(500).send({msg:"menu item failed to  create",err})
console.log(err);

    }
}


//to display menu
export async function getMenu(req, res) {
    try {
      const {category } = req.params;
      
      if (!category) return res.status(400).json({ msg: "Category is required" });
  console.log(`the category:${category}`);
  
      const menuItems = await menuItemModel.find({category});
      res.status(200).send(menuItems);
    } catch (err) {
      res.status(500).send({ msg: "Failed to fetch menu items" });
      console.log(err);
    }
  }

//display the catagories
export async function getCate(req,res){
    try{
const category= await categoryModel.find()
res.status(200).send(category)
    }catch(err){
        res.status(500).send({msg:"failed to fetch",err})
        console.log(err);
        
    }
}

//add a new catgory
export async function addcate(req,res){
    try{
const {name}=req.body;

let cata=await categoryModel.findOne({name})
if(!name)
    return res.status(400).send({msg:"category name wanted for adding a product "});
//if there is no category name exist then craete a new category 
if(!cata){
    cata= new categoryModel({name});
    await cata.save()
}
res.status(201).send({msg:"new category is created",cata})

}catch(error){
    
    res.status(500).send({msg:"failed to create category",error})
        console.log(error);
        
    }
}