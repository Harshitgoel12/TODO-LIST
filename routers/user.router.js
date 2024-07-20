const express=require("express");
const userhandler=require('../controllers/user.controller')
const model=require("../models/todo.model")
const router=express.Router();

router.route("/").get(userhandler)
router.route("/create").post(async(req,res)=>{
     const {title,discription}=req.body;
     if(!title)res.send("title is required");
     if(!discription)res.send("discription is required");
     const data=await model.create({
      title,
      discription,
     })
     const d=await model.find({});
    res.render("index",{d})
})
router.route("/delete/:id").post(async(req,res)=>{
  const id=req.params.id;
     const data=await model.deleteOne({_id:id});
      const d=await model.find({});
     res.render("index",{d});
})

router.route("/update/:id").post(async(req,res)=>{
  const id=req.params.id;
    const data=await model.find({_id:id});
      res.render("update",{data});
})
router.route("/updatedata/:id").post(async(req,res)=>{
                  const id=req.params.id;
              await model.updateOne({ _id: id }, { $set: { title: req.body.title,discription:req.body.discription } });
             res.redirect("/")
})



module.exports=router;