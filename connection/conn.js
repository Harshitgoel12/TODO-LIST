const mongoose= require("mongoose");

const connectdb= async()=>{
      try {
         await mongoose.connect("mongodb://127.0.0.1:27017/mypro")
      } catch (error) {
        console.log("connection error is comming"+error)
      }
}
module.exports=connectdb;