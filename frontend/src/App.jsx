import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashbord";
import CreateEmployee from "./Pages/CreateEmployee";
import EmpDashboard from "./Pages/employeeDashborad";
import AssignTask from "./Pages/AssignTask";
import UserReport from "./Pages/EmpReport";
import DisplayUserTask from "./Pages/DisplayEmptask";


const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Login/>}/>
    <Route path="login" element={<Login/>}/>
    </Route>
    <Route path="admindashboard" element={<AdminDashboard/>}>
    <Route path="create employee" element={<CreateEmployee/>}/>
    <Route path="assign task" element={<AssignTask />} />
    <Route path="empreport" element={<UserReport/>}/>
    
    
    </Route>
    <Route path="empdashboard" element={<EmpDashboard/>}>
    <Route path="displayemployee" element={<DisplayUserTask/>}/>
    
    
    </Route>

  
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App;