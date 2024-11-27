import empschema from "./models/emp.model.js" 
//to add employees
export async function addEmp(req,res){
 try{
    const {name,age,place,designation,salary,experience,phone,email,gender,profile}=req.body
    if(!(name&&age&&place&&designation&&salary&&experience&&phone&&email&&gender&&profile))
        return res.status(404).send({msg:"input fields are empty"})
    const employee= await empschema.create({name,age,place,designation,salary,experience,phone,email,gender,profile})
        res.status(201).send({msg:"sucessfully added"})   
    }catch(error){
        console.log(error);
        res.status(404).send({msg:"failed to add employee"})
 }
} 
//display single employee
export async function displayEmps(req,res){
    try{
        const{name,age,place,designation,salary,experience,phone,email,gender,profile}=req.body
        const employees=await empschema.find()
            res.status(200).send(employees)

    }catch(error){
        console.log(error);
        res.status(404).send({msg:"unable to display"})
        
    }
}
//display all employee
export async function displayEmp(req,res){
    try{
        const {_id}=req.params
        const employee= await empschema.findOne({_id})
        res.status(200).send(employee)

    }catch(error){
     res.status(404).send({msg:"employee data cannot acess now"})
    }
}
//update emp
export async function updateEpm(req,res){
    try{
        const {_id}=req.params
        // const {name,age,place,designation,salary,experience,phone,email,gender,profile}=req.body
        // const emp=await empschema.updateOne({_id},{$set:{name,age,place,designation,salary,experience,phone,email,gender,profile}})
        const {...data}=req.body
        const emp=await empschema.updateOne({_id},{$set:{...data}})
        res.status(201).send({msg:"update sucessfull"})

    }catch(error){
        res.status(404).send({msg:"cannot update "})
        
    }
}
//to delete emp
export async function deleteEmp(req,res){
    try{
        const {_id}=req.params
        await empschema.deleteOne({_id})
        res.status(200).send({msg:"successfully deleted"})

    }catch(error){
        console.log(error);
        res.status(404).send({msg:"cannot delete"})
        
    }
}