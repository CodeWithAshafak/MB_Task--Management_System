const AdminModel=require("../Models/AdminModel")
const transporter=require("../Middlewere/Nodemailer")
const RandomPass=require("../Middlewere/Randompass")
const EmpModel=require("../Models/EMPModel")
const TaskModel=require("../Models/taskModel")
// const EMPModel = require("../Models/EMPModel")

const AdminLogin=async(req , res)=>{
    const {userid , password}=req.body
   try {
    const Admin= await AdminModel.findOne({userid:userid})
    if(!Admin)
    {
        res.status(400).json({msg:"Invalid User ID"})
    }
   else if(Admin.password!=password)
    {
        res.status(400).json({msg:"Invalid Password"}) 
    }
    else{
        res.status(200).json(Admin)
    }
    

} catch (error) {
    console.log(error)
}
   
}


const CreateUser=async(req , res)=>{
    console.log(req.body)
    const {empname,designation,email}=req.body;
    const Mypass=RandomPass();
 //......email wala.........................
    const mailOptions = {
     from: "ashafak04@gmail.com", 
     to:email,                          // Recipient email
     subject:"Rocket Brains pvt. Ltd. ",                     // Email subject
     text:`Dear,${empname} Your Account has been created with password : ${Mypass}You can login by using Email ID and Password.Thank You ! `
   };
     //mongoDb me ja raha he
try {
    const info = await transporter.sendMail(mailOptions);

    const MyData= await EmpModel.create({
        empname:empname,
        designation:designation,
        email:email,
        password:Mypass,
        
       
    })
 res.status(200).json({ success: true, message: 'Email sent', info });
} catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
}
}

const AssinTaskDisplay=async(req , res)=>{
    try {
     const User = await EmpModel.find()
     res.status(200).json(User)
    } catch (error) {
     console.log(error)
    }
 }
 
 //task assign for employee.............
 const AssignTaskSave=async(req ,res)=>{
  const { empid,taskTitle ,description, completionDays ,priority}=req.body
  
  
  console.log(req.body);
  
  try {
     const Task = await TaskModel.create({
         taskTitle:taskTitle,
         discription:description,
         completionDays:completionDays,
        empid:empid,
           priority: priority

     })
     res.status(200).json({msg:"Task Assign Succesfuly!!!!"})
  } catch (error) {
     console.log(error)
  }
 
 }


 const userReportDisplay=async(req, res)=>{

    console.log(req.body);
    
    try {
     const Task= await TaskModel.find().populate("empid")
     res.status(200).send(Task)
    } catch (error) {
     console.log(error)
    }
  
 }

 const ReAssignTask=async(req , res)=>{
    const { taskid }=req.body
    try {
     const Task = await TaskModel.findByIdAndUpdate(taskid , {empReport:"Pending"})
     res.status(200).send({msg:'Task Successfully ReAssign!!!'})
    } catch (error) {
     console.log(error)
    }
 }
 

 const empdelete = async (req,res)=>{
    
    try {

    // res.send("chal rha he delete")
    //  console.log(req.query);
    const { empid } = req.query
    await EmpModel.findByIdAndDelete(empid);
    res.send("Student Data successfully Deleted...!")
    } catch (error) {
        console.log(error);
    }
}

const TaskEditDisplay=async(req, res)=>{
    console.log(req.body)

const{id}=req.body
try {
   const Task=await EmpModel.findById(id)
   console.log("bakcnd me ymila Details",Task);
   
 
   res.send(Task)
 
} catch (error) {
    console.log(error);
}
}


const taskeditsave =  async(req,res)=>{
    // res.send("chla rha ")
  const { _id} = req.body
  const responce = await EmpModel.findByIdAndUpdate(_id, req.body);
  res.status(200).send({msg:"data saved successfully"})  
}

module.exports={
    AdminLogin,
    CreateUser,
    AssinTaskDisplay,
    AssignTaskSave,
    userReportDisplay,
    ReAssignTask,
    empdelete,
    TaskEditDisplay,
    taskeditsave 
}