const model=require("../models/todo.model")

const userhandler=async(req,res)=>{
      const d=await model.find({})
  res.render("index",{d});
}

const createlist=async(req,res)=>{
    const {title,discription}=req.body;
    if(!title)res.send("title is required");
    if(!discription)res.send("discription is required");
    const data=await model.create({
     title,
     discription,
    })
    const d=await model.find({});
   res.render("index",{d})
}

const deletedata=async(req,res)=>{
    const id=req.params.id;
       const data=await model.deleteOne({_id:id});
        const d=await model.find({});
       res.render("index",{d});
  }

const openupdatepage=async(req,res)=>{
    const id=req.params.id;
      const data=await model.find({_id:id});
        res.render("update",{data});
  }

  const update =async(req,res)=>{
    const id=req.params.id;
await model.updateOne({ _id: id }, { $set: { title: req.body.title,discription:req.body.discription } });
res.redirect("/")
}

module.exports={
    userhandler,
    createlist,
    deletedata,
    openupdatepage,
    update,
}