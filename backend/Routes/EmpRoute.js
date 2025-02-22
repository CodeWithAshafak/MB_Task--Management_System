const express=require("express");
const route=express.Router();
const EmpControler=require("../Controllers/EmpController")

route.post("/employeelogin", EmpControler.EmployeeLogin)
route.post("/empdisplaytask", EmpControler.EmpDisplayTask)
route.post("/emptasksubmit", EmpControler.EmpSubmitTask)



module.exports=route;