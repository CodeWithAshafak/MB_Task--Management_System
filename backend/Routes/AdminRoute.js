const express=require("express");
const route=express.Router();
const AdminController=require("../Controllers/AdminController")

route.post("/adminlogin", AdminController.AdminLogin)
route.post("/createuser", AdminController.CreateUser)
route.get("/assigntaskDisplay", AdminController.AssinTaskDisplay)
route.post("/savetask", AdminController.AssignTaskSave)
route.get("/userreport",AdminController.userReportDisplay)
route.post("/reassignreport", AdminController.ReAssignTask)

route.get("/empdelete",AdminController.empdelete)
 route.post("/taskeditdisplay",AdminController.TaskEditDisplay)

 route.post("/taskeditsave" , AdminController.taskeditsave)





module.exports=route

