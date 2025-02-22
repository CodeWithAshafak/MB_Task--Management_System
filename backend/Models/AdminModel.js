const mongoose=require("mongoose");
const adminSchema=new mongoose.Schema({
    name:String,
    userid:String,
    password:String
})

module.exports=mongoose.model("admin" , adminSchema)