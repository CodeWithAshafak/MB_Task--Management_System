const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
   taskTitle:String,
    discription:String,
    completionDays:String,
    taskstatus:{
      type:String,
      default:"No Complited"
    },
    empReport:{
      type:String,
      default:"Pending"
    },
     empid: {type: mongoose.Schema.Types.ObjectId, ref: 'employee'}
})
module.exports=mongoose.model("task", taskSchema)