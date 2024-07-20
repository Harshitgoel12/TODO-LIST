const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        uppercase:true,
        trim:true,
    },
    discription:{
        type:String,
        required:true,
        trim:true,
    }
},{timestamps:true});
module.exports= mongoose.model("Todolist",schema);