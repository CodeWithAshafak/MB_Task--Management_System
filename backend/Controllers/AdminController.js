const AdminModel=require("../Models/AdminModel")
const transporter=require("../Middlewere/Nodemailer")
const RandomPass=require("../Middlewere/Randompass")
const EmpModel=require("../Models/EMPModel")
const TaskModel=require("../Models/taskModel")

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

//.............................................Employee..data save and send mail...........................
const CreateUser=async(req , res)=>{
    console.log(req.body)
    const {empname,designation,email,terms}=req.body;
    const Mypass=RandomPass();
 //......email wala.........................
    const mailOptions = {
     from: "nazneenbanosiddiqui@gmail.com", // Sender email
     to:email,                          // Recipient email
     subject:"New-Vision Company Work Detail Account",                     // Email subject
     text:`Dear ${empname} Your Account created with password : ${Mypass} 
      You can login using with your Email account
     `
   };
     //mongoDb me ja raha he
try {
    const info = await transporter.sendMail(mailOptions);

    const MyData= await EmpModel.create({
        empname:empname,
        designation:designation,
        email:email,
        password:Mypass,
        terms:terms
       
    })
 res.status(200).json({ success: true, message: 'Email sent', info });
} catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
}
}
// task display ke liye................
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
  const { empid,taskTitle ,description, completionDays}=req.body
  
  try {
     const Task = await TaskModel.create({
         taskTitle:taskTitle,
         discription:description,
         completionDays:completionDays,
          empid:empid
     })
     res.status(200).json({msg:"Task Assign Succesfuly!!!!"})
  } catch (error) {
     console.log(error)
  }
 
 }

 //************emplyee report
 const userReportDisplay=async(req, res)=>{
    try {
     const Task= await TaskModel.find().populate("empid")
     res.status(200).send(Task)
    } catch (error) {
     console.log(error)
    }
  
 }

 //************************reassign task
 const ReAssignTask=async(req , res)=>{
    const { taskid }=req.body
    try {
     const Task = await TaskModel.findByIdAndUpdate(taskid , {empReport:"Pending"})
     res.status(200).send({msg:'Task Successfully ReAssign!!!'})
    } catch (error) {
     console.log(error)
    }
 }
 


module.exports={
    AdminLogin,
    CreateUser,
    AssinTaskDisplay,
    AssignTaskSave,
    userReportDisplay,
    ReAssignTask
}