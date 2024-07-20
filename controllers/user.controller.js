const model=require("../models/todo.model")

const userhandler=async(req,res)=>{
      const d=await model.find({})
  res.render("index",{d});
}
module.exports=userhandler