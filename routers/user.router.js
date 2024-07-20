const express=require("express");
const controller=require('../controllers/user.controller')
const model=require("../models/todo.model")
const router=express.Router();

router.route("/").get(controller.userhandler)
router.route("/create").post(controller.createlist)
router.route("/delete/:id").post(controller.deletedata)

router.route("/update/:id").post(controller.openupdatepage)
router.route("/updatedata/:id").post(controller.update)



module.exports=router;